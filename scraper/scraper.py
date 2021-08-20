from datetime import timedelta, date
import time
from scraper_models import Streamscraper, Streamer
from config import STREAMERS, DEBUG

HEADERS = {
  'Content-Type': 'application/json'
}

streamer_obj = []
scraper_obj = []
day = date.today()

for streamer in STREAMERS:
        streamer_obj.append(Streamer(streamer))
        scraper_obj.append(Streamscraper(streamer_obj[-1]))

def print_debug(s):
    if DEBUG:
        print("*** {} ***".format(s))


while True: 
    if day != date.today():
        print_debug("NEW DAY")
        for streamer in streamer_obj:
            streamer.end_count(day.strftime("%Y-%m-%d"))
            print_debug("Ended count for {}".format(streamer.name))
            
          
        day += timedelta(days=1) 