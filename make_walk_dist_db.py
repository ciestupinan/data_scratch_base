#!/usr/bin/python3
"""
Query Google maps for walking distances between T stops.

Get walking distance and time from every Green Line stop to every other.

It's a combination of GPS coordinates and line information from T data and
distances from Google Maps API.

It also takes quite a while, due to rate limiting at the free tier of Google's
API, so consider backup/restore like:
    mongoexport --db walking_distances --collection distances --out walking_distances.json
    mongoimport --db walking_distances --collection distances --file walking_distances.json
"""

from pymongo import MongoClient
import time
import sys
import requests
import json

# Create the databases we'll use; 2 in and 1 out.
mongo = MongoClient()
gps_db = mongo.mbta_gtfs
line_info_db = mongo.t_lines
# Store results
output_db = mongo.walking_distances

# Each of the Green Line branches will be considered separately.
lines = [ 'GLB', 'GLC', 'GLD', 'GLE' ]

def product(x, y):
    return [(a, b) for a in x for b in y]

def request_get_json(url):
    res = requests.get(url=url)
    if res.status_code != requests.codes.ok:
        print('WARN: error fetching {}'.format(url))
    return res.json()

# output collection
coll = output_db.distances
count = 0
for l in lines:
    line_stops = []
    # Create a combination of all stops to stops for this line.
    for id_doc in line_info_db.stops.find( { 'line' : l } ):
        # Current source stop, from which we'll find distance to all
        # others. Treat it like a matrix. Use this ID to look up coords.
        stop_id = id_doc['stop_id']
        # There should be exactly 1 associated document in the GPS db.
        coords_doc = gps_db.stops.find( { 'stop_id' : stop_id } )[0]
        # Append a tuple of the lat,lon, and this stop ID.
        line_stops.append((coords_doc['stop_lat'], coords_doc['stop_lon'], stop_id))

    # We have a list of the coordinates of all Green Line stops on this line.
    # Combine them into a matrix to find the distance to each stop from each
    # stop.
    # Matrix is a long list of:
    # ( (source lat, source lon, source id), (dest lat, dest long, dest id) )
    matrix = product(line_stops, line_stops)

    for r in matrix:
        count = count + 1
        # API URL:
        # https://developers.google.com/maps/documentation/distance-matrix/intro
        url = 'https://maps.googleapis.com/maps/api/distancematrix/json?origins={},{}&destinations={},{}&mode=walking&units=imperial'.format(r[0][0], r[0][1], r[1][0], r[1][1])

        # Just to track where we are
        print('{}: {}'.format(count, url))

        data = request_get_json(url)

        coll.insert_one( { 'source_id' : r[0][2], \
                           'dest_id' : r[1][2], \
                           'dist_val_ft' : data['rows'][0]['elements'][0]['distance']['value'], \
                           'dist_text' : data['rows'][0]['elements'][0]['distance']['text'], \
                           'duration_val_sec' : data['rows'][0]['elements'][0]['duration']['value'], \
                           'duration_text' : data['rows'][0]['elements'][0]['duration']['text'] } )

        # We can only have 100 elements per request, and 100 per 10 seconds, so
        # need to rate limit this a bit.
        time.sleep(1.5)

print('Total requests: {}'.format(count))
print('DB entries: {}'.format(coll.count()))
