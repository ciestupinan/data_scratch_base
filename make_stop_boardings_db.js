// Create a mongoDB with the boardings pertaining to each stop on green line
// Helpful in determining the popularity of each stop
// Made with a combination of stop_ids from mbta_gtfs database and
// data from CH 02 p16-17 of these statistics from the MBTA:
// http://www.mbta.com/uploadedfiles/documents/2014%20BLUEBOOK%2014th%20Edition.pdf

// Stops are not duplicated. Stops shared by multipled lines are listed first,
// followed by the stops pertaining to each individual line (B, C, D, E)


// NOTE: this will not clear the DB first, so don't run multiple times (or
// clear before you do).

// Run like 'node make_line_info_db.js'. Requires mongodb from npm.

var mongodb = require("mongodb").MongoClient;

// specify the database here for connection
mongodb.connect("mongodb://localhost:27017/t_lines", function(err, db) {

  // here specify the collection name
  var coll = db.collection('boardings');

  // insert all our data
  coll.insert(
    [

    	// start with shared green line stops:

		{
		stop_id: "place-lech",
		stop_boardings: 6421
		},
		{
		stop_id : "place-spmnl",
		stop_boardings: 1042
		},
		{
		stop_id : "place-north",
		stop_boardings: 6248
		},
		{
		stop_id : "place-haecl",
		stop_boardings: 4428
		},
		{
		stop_id : "place-gover",
		stop_boardings: 7993
		},
		{
		stop_id : "place-pktrm",
		stop_boardings: 8119
		},
		{
		stop_id : "place-boyls"
		stop_boardings: 6826
		},
		{
		stop_id : "place-armnl",
		stop_boardings: 8519
		},
		{
		stop_id : "place-coecl",
		stop_boardings: 14021
		},
		{
		stop_id : "place-hymnl",
		stop_boardings: 8946
		},
		{
		stop_id : "place-kencl",
		stop_boardings: 9503
		},
		{
		stop_id : "place-prmnl",
		stop_boardings: 3643
		},
		{
		stop_id : "place-symcl",
		stop_boardings: 1711
		},

		// now B line:

		{
		stop_id : "place-bland",
		stop_boardings: 1540
		},
		{
		stop_id : "place-buest",
		stop_boardings: 1747
		},
		{
		stop_id : "place-bucen",
		stop_boardings: 2194
		},
		{
		stop_id : "place-buwst",
		stop_boardings: 704
		},
		{
		stop_id : "place-stplb",
		stop_boardings: 1296
		},
		{
		stop_id : "place-plsgr",
		stop_boardings: 1167
		},
		{
		stop_id : "place-babck",
		stop_boardings: 1387
		},
		{
		stop_id : "place-brico",
		stop_boardings: 2654
		},
		{
		stop_id : "place-harvd",
		stop_boardings: 3602
		},
		{
		stop_id : "place-grigg",
		stop_boardings: 1203
		},
		{
		stop_id : "place-alsgr",
		stop_boardings: 1437
		},
		{
		stop_id : "place-wrnst",
		stop_boardings: 2047
		},
		{
		stop_id : "place-wascm",
		stop_boardings: 1885
		},
		{
		stop_id : "place-sthld",
		stop_boardings: 856
		},
		{
		stop_id : "place-chswk",
		stop_boardings: 615
		},
		{
		stop_id : "place-chill",
		stop_boardings: 626
		},
		{
		stop_id : "place-sougr",
		stop_boardings: 214
		},
		{
		stop_id : "place-lake",
		stop_boardings: 1136
		},


		// now C line:

		{
		stop_id : "place-smary",
		stop_boardings: 1532
		},
		{
		stop_id : "place-hwsst",
		stop_boardings: 339
		},
		{
		stop_id : "place-kntst",
		stop_boardings: 386
		},
		{
		stop_id : "place-stpul",
		stop_boardings: 849
		},
		{
		stop_id : "place-cool",
		stop_boardings: 3440
		},
		{
		stop_id : "place-sumav",
		stop_boardings: 945
		},
		{
		stop_id : "place-bndhl",
		stop_boardings: 356
		},
		{
		stop_id : "place-fbkst",
		stop_boardings: 444
		},
		{
		stop_id : "place-bcnwa",
		stop_boardings: 1091
		},
		{
		stop_id : "place-tapst",
		stop_boardings: 674
		},
		{
		stop_id : "place-denrd",
		stop_boardings: 398
		},
		{
		stop_id : "place-engav",
		stop_boardings: 555
		},
		{
		stop_id : "place-clmnl",
		stop_boardings: 1457
		},

		// now D line:

		{
		stop_id : "place-fenwy",
		stop_boardings: 3488
		},
		{
		stop_id : "place-longw",
		stop_boardings: 2719
		},
		{
		stop_id : "place-bvmnl",
		stop_boardings: 3230
		},
		{
		stop_id : "place-brkhl",
		stop_boardings: 1225
		},
		{
		stop_id : "place-bcnfd",
		stop_boardings: 1075
		},
		{
		stop_id : "place-rsmnl",
		stop_boardings: 3404
		},
		{
		stop_id : "place-chhil",
		stop_boardings: 1416
		},
		{
		stop_id : "place-newto",
		stop_boardings: 1891
		},
		{
		stop_id : "place-newtn",
		stop_boardings: 1627
		},
		{
		stop_id : "place-eliot",
		stop_boardings: 814
		},
		{
		stop_id : "place-waban",
		stop_boardings: 545
		},
		{
		stop_id : "place-woodl",
		stop_boardings: 957
		},
		{
		stop_id : "place-river",
		stop_boardings: 2241
		},

		// now E line:
		{
		stop_id : "place-nuniv",
		stop_boardings: 2650
		},
		{
		stop_id : "place-mfa",
		stop_boardings: 1683
		},
		{
		stop_id : "place-lngmd",
		stop_boardings: 3813
		},
		{
		stop_id : "place-brmnl",
		stop_boardings: 2547
		},
		{
		stop_id : "place-fenwd",
		stop_boardings: 221
		},
		{
		stop_id : "place-mispk",
		stop_boardings: 548
		},
		{
		stop_id : "place-rvrwy",
		stop_boardings: 495
		},
		{
		stop_id : "place-bckhl",
		stop_boardings: 35
		},
		{
		stop_id : "place-hsmnl",
		stop_boardings: 820
		},


    ]
  )

  process.stdout.write(coll.count() + " boardings inserted\n");

  db.close();

});
