import twitch
from config import DEBUG, EMOTES, OAUTH_TOKEN, NICKNAME
import requests
import json

HEADERS = {
  'Content-Type': 'application/json'
}

def contains_word(s, w):
    return (' ' + w + ' ') in (' ' + s + ' ')


def print_debug(s):
    if DEBUG:
        print("*** {} ***".format(s))

class Streamscraper:
    def __init__(self, streamer):
        self.streamer = streamer
        self.chat = twitch.Chat(channel=streamer.name, nickname=NICKNAME, oauth=OAUTH_TOKEN).subscribe(
            lambda message: self.process_message(message, streamer))
        print_debug("connected to {}".format(streamer.name))
        

    def process_message(self, msg, streamer):
        # print("{}: {}".format(streamer.name, msg.text))
        for emote in EMOTES:
            if contains_word(msg.text, emote):
                streamer.count_emote(emote)
                return 

class Streamer():
    def __init__(self, name):
        self.name = name
        self.emotes = {em: 0 for em in EMOTES}
        

    def count_emote(self, emote):
        self.emotes[emote] += 1
        print(self.emotes)

    def end_count(self, date):
        print_debug("Ending count for {}".format(self.name))

        data = dict(self.emotes, streamer_name=self.name, date=date)
        print(data)
        print(type(data))
        requests.request("POST", "http://localhost:5000/api/emotecount", headers=HEADERS, data=json.dumps(data))

        print_debug("ADDED")
        self.emotes = {em: 0 for em in EMOTES}
        