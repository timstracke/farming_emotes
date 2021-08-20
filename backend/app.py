from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine, event, MetaData, Table, Column
from sqlalchemy.engine import Engine
from sqlalchemy.orm import mapper
from sqlite3 import Connection as SQLite3Connection
from flask_cors import CORS
from config import EMOTES
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.ticker import MaxNLocator

import io
import base64


plt.tight_layout()

app = Flask(__name__)
CORS(app)
engine = create_engine('sqlite:///db.sqlite3')

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db.sqlite3"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False


# configure sqlite3 to enforce foreign key contraints
@event.listens_for(Engine, "connect")
def _set_sqlite_pragma(dbapi_connection, connection_record):
    if isinstance(dbapi_connection, SQLite3Connection):
        cursor = dbapi_connection.cursor()
        cursor.execute("PRAGMA foreign_keys=ON;")
        cursor.close()

db = SQLAlchemy(app)

# Setting up the table for the emotecounts
columns = list()
columns.append(Column("id", db.Integer, primary_key=True))
columns.append(Column("date", db.String))
columns.append(Column("streamer_name", db.String))
for emote in EMOTES:
    columns.append(Column(emote, db.Integer))
metadata = MetaData()
emotecount_table = Table("Emotecount", metadata, *columns)
metadata.create_all(engine)

class Emotecount(db.Model):
    __tablename__ = "emotecount"
    id = Column("id", db.Integer, primary_key=True)
    date = Column(db.String)
    streamer_name = Column(db.String)
    for emote in EMOTES:
            exec(emote + "=" + "Column(emote, db.Integer)")
    
        

mapper(Emotecount, emotecount_table, non_primary=True)



db.create_all()
    
    


@app.route('/api/emotecount', methods=["POST"])
def create_emotecount():
    '''
    create and commit new emotecount
    '''
    data = request.get_json()
    emotecount = Emotecount(**data)
    db.session.add(emotecount)
    db.session.commit()
    return jsonify({"id": emotecount.id}), 200


@app.route('/api/visualization', methods=["POST"])
def create_visualization():
    req = request.get_json()
    counts = Emotecount.query.filter_by(streamer_name=req["streamer"]).limit(30).all()
    
    x = [data.__dict__["date"] for data in counts]
    y = [data.__dict__[req["emote"]] for data in counts]
    
    plt.tight_layout(pad=200)
    fig, ax = plt.subplots()
    ax.bar(x, y, width=0.8, color="#6441a5")
    ax.yaxis.set_major_locator(MaxNLocator(integer=True))
    plt.xticks(rotation=90)
    plt.subplots_adjust(bottom=0.2)
    ax.set_title(req["emote"] + "'s " + req["streamer"] + " received")
    
    pic_IObytes = io.BytesIO()
    plt.savefig(pic_IObytes,  format='png', transparent=True)
    plt.close()
    pic_IObytes.seek(0)
    pic_hash = base64.b64encode(pic_IObytes.read())
    print(type(pic_hash))
    return jsonify({"image": pic_hash.decode('utf-8')}), 200





if __name__ == '__main__':
    app.run(debug=True)

