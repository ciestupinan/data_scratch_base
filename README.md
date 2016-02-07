'ciestu12_sajarvis' Data Scratch Area
=====================================

This contains the data and scripts needed to generate the databases we're using.

Here's what exists...

#### 1- GPS Locations of Stops

A database of all T stops, their GPS locations, stop IDs, and a couple other pieces of info is generated with 'make_stop_gps_db.py' based on the MBTA GTFS data.

The data is in mbta_gtfs_feb_3.tar.gz. Updated versions may be available here:
http://www.mbta.com/rider_tools/developers/default.asp?id=21895

To generate (with Python2):

    tar -xvzf mbta_gtfs_feb_3.tar.gz
    python make_stop_gps_db.py

#### 2- Green Line Stops and Ordering

Info relating stops to lines and a sequential ordering seemed to be missing from the GTFS data, so we crafted another that provides this information. It creates a database with the line a stop services and the neighboring inbound and outbound stops.

To generate (with nodejs):

    node make_line_info_db.js
