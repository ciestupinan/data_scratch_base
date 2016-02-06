#!/usr/bin/python
"""
Insert
"""
from pymongo import MongoClient

mongo = MongoClient()
db = mongo.mbta_gtfs
coll = db.stops
coll.remove({})

with open('mbta_gtfs_feb_3/stops.txt', 'r') as f:
    headers = [h.translate(None, '"\n\r') for h in f.readline().split(',')]
    for line in f.readlines():
        vals = [foo.translate(None, '"\n\r') for foo in line.split(',')]
        obj = dict(zip(headers, vals))
        # insert document into the collection
        coll.insert_one(obj)

print coll.count()
