// Create a mongoDB with the stop information regarding lines.
// Helpful in determining the sequence of T stops.
// Made with a combination of stop_ids from the mbta_gtfs database and
// data from this map: http://www.mbta.com/schedules_and_maps/subway/

// NOTE this will not clear the DB first, so don't run multiple times (or
// clear before you do).

// Run like 'node make_line_info_db.js'. Requires mongodb from npm.

var mongodb = require("mongodb").MongoClient;

// specify the database here for connection
mongodb.connect("mongodb://localhost:27017/t_lines", function(err, db) {

  // here specify the collection name
  var coll = db.collection('stops');

  // insert all our data
  coll.insert(
    [

      // start with B line
      // and start from inbound (just organizational, makes no real difference)

      {
        stop_id : "place-pktrm",
        pretty_name : "Park Street",
        line : "GLB",
        next_inbound : null,
        next_outbound : "place-boyls"
      },
      {
        stop_id : "place-boyls",
        pretty_name : "Boylston",
        line : "GLB",
        next_inbound : "place-pktrm",
        next_outbound : "place-armnl"
      },
      {
        stop_id : "place-armnl",
        pretty_name : "Arlington",
        line : "GLB",
        next_inbound : "place-boyls",
        next_outbound : "place-coecl"
      },
      {
        stop_id : "place-coecl",
        pretty_name : "Copley",
        line : "GLB",
        next_inbound : "place-armnl",
        next_outbound : "place-hymnl"
      },
      {
        stop_id : "place-hymnl",
        pretty_name : "Hynes Convention Center",
        line : "GLB",
        next_inbound : "place-coecl",
        next_outbound : "place-kencl"
      },
      {
        stop_id : "place-kencl",
        pretty_name : "Kenmore",
        line : "GLB",
        next_inbound : "place-hymnl",
        next_outbound : "place-bland"
      },
      {
        stop_id : "place-bland",
        pretty_name : "Blandford Street",
        line : "GLB",
        next_inbound : "place-kencl",
        next_outbound : "place-buest"
      },
      {
        stop_id : "place-buest",
        pretty_name : "Boston University East",
        line : "GLB",
        next_inbound : "place-bland",
        next_outbound : "place-bucen"
      },
      {
        stop_id : "place-bucen",
        pretty_name : "Boston University Central",
        line : "GLB",
        next_inbound : "place-buest",
        next_outbound : "place-buwst"
      },
      {
        stop_id : "place-buwst",
        pretty_name : "Boston University West",
        line : "GLB",
        next_inbound : "place-bucen",
        next_outbound : "place-stplb"
      },
      {
        stop_id : "place-stplb",
        pretty_name : "Saint Paul Street",
        line : "GLB",
        next_inbound : "place-buwst",
        next_outbound : "place-plsgr"
      },
      {
        stop_id : "place-plsgr",
        pretty_name : "Pleasant Street",
        line : "GLB",
        next_inbound : "place-stplb",
        next_outbound : "place-babck"
      },
      {
        stop_id : "place-babck",
        pretty_name : "Babcock Street",
        line : "GLB",
        next_inbound : "place-plsgr",
        next_outbound : "place-brico"
      },
      {
        stop_id : "place-brico",
        pretty_name : "Packards Corner",
        line : "GLB",
        next_inbound : "place-babck",
        next_outbound : "place-harvd"
      },
      {
        stop_id : "place-harvd",
        pretty_name : "Harvard Avenue",
        line : "GLB",
        next_inbound : "place-brico",
        next_outbound : "place-grigg"
      },
      {
        stop_id : "place-grigg",
        pretty_name : "Griggs Street",
        line : "GLB",
        next_inbound : "place-harvd",
        next_outbound : "place-alsgr"
      },
      {
        stop_id : "place-alsgr",
        pretty_name : "Allston Street",
        line : "GLB",
        next_inbound : "place-grigg",
        next_outbound : "place-wrnst"
      },
      {
        stop_id : "place-wrnst",
        pretty_name : "Warren Street",
        line : "GLB",
        next_inbound : "place-alsgr",
        next_outbound : "place-wascm"
      },
      {
        stop_id : "place-wascm",
        pretty_name : "Washington Street",
        line : "GLB",
        next_inbound : "place-wrnst",
        next_outbound : "place-sthld"
      },
      {
        stop_id : "place-sthld",
        pretty_name : "Sutherland Road",
        line : "GLB",
        next_inbound : "place-wascm",
        next_outbound : "place-chswk"
      },
      {
        stop_id : "place-chswk",
        pretty_name : "Chiswick Road",
        line : "GLB",
        next_inbound : "place-sthld",
        next_outbound : "place-chill"
      },
      {
        stop_id : "place-chill",
        pretty_name : "Chestnut Hill Avenue",
        line : "GLB",
        next_inbound : "place-chswk",
        next_outbound : "place-sougr"
      },
      {
        stop_id : "place-sougr",
        pretty_name : "South Street",
        line : "GLB",
        next_inbound : "place-chill",
        next_outbound : "place-lake"
      },
      {
        stop_id : "place-lake",
        pretty_name : "Boston College",
        line : "GLB",
        next_inbound : "place-sougr",
        next_outbound : null
      },

      // now C line

      {
        stop_id : "place-north",
        pretty_name : "North Station",
        line : "GLC",
        next_inbound : null,
        next_outbound : "place-haecl"
      },
      {
        stop_id : "place-haecl",
        pretty_name : "Haymarket",
        line : "GLC",
        next_inbound : "place-north",
        next_outbound : "place-gover"
      },
      {
        stop_id : "place-gover",
        pretty_name : "Government Center",
        line : "GLC",
        next_inbound : "place-haecl",
        next_outbound : "place-pktrm"
      },
      {
        stop_id : "place-pktrm",
        pretty_name : "Park Street",
        line : "GLC",
        next_inbound : "place-gover",
        next_outbound : "place-boyls"
      },
      {
        stop_id : "place-boyls",
        pretty_name : "Boylston",
        line : "GLC",
        next_inbound : "place-pktrm",
        next_outbound : "place-armnl"
      },
      {
        stop_id : "place-armnl",
        pretty_name : "Arlington",
        line : "GLC",
        next_inbound : "place-boyls",
        next_outbound : "place-coecl"
      },
      {
        stop_id : "place-coecl",
        pretty_name : "Copley",
        line : "GLC",
        next_inbound : "place-armnl",
        next_outbound : "place-hymnl"
      },
      {
        stop_id : "place-hymnl",
        pretty_name : "Hynes Convention Center",
        line : "GLC",
        next_inbound : "place-coecl",
        next_outbound : "place-kencl"
      },
      {
        stop_id : "place-kencl",
        pretty_name : "Kenmore",
        line : "GLC",
        next_inbound : "place-hymnl",
        next_outbound : "place-smary"
      },
      {
        stop_id : "place-smary",
        pretty_name : "Saint Mary Street",
        line : "GLC",
        next_inbound : "place-kencl",
        next_outbound : "place-hwsst"
      },
      {
        stop_id : "place-hwsst",
        pretty_name : "Hawes Street",
        line : "GLC",
        next_inbound : "place-smary",
        next_outbound : "place-kntst"
      },
      {
        stop_id : "place-kntst",
        pretty_name : "Kent Street",
        line : "GLC",
        next_inbound : "place-hwsst",
        next_outbound : "place-stpul"
      },
      {
        stop_id : "place-stpul",
        pretty_name : "Saint Paul Street",
        line : "GLC",
        next_inbound : "place-kntst",
        next_outbound : "place-cool"
      },
      {
        stop_id : "place-cool",
        pretty_name : "Coolidge Corner",
        line : "GLC",
        next_inbound : "place-stpul",
        next_outbound : "place-sumav"
      },
      {
        stop_id : "place-sumav",
        pretty_name : "Summit Avenue",
        line : "GLC",
        next_inbound : "place-cool",
        next_outbound : "place-bndhl"
      },
      {
        stop_id : "place-bndhl",
        pretty_name : "Brandon Hall",
        line : "GLC",
        next_inbound : "place-sumav",
        next_outbound : "place-fbkst"
      },
      {
        stop_id : "place-fbkst",
        pretty_name : "Fairbanks Street",
        line : "GLC",
        next_inbound : "place-bndhl",
        next_outbound : "place-bcnwa"
      },
      {
        stop_id : "place-bcnwa",
        pretty_name : "Washington Square",
        line : "GLC",
        next_inbound : "place-fbkst",
        next_outbound : "place-tapst"
      },
      {
        stop_id : "place-tapst",
        pretty_name : "Tappan Street",
        line : "GLC",
        next_inbound : "place-bcnwa",
        next_outbound : "place-denrd"
      },
      {
        stop_id : "place-denrd",
        pretty_name : "Dean Road",
        line : "GLC",
        next_inbound : "place-tapst",
        next_outbound : "place-engav"
      },
      {
        stop_id : "place-engav",
        pretty_name : "Englewood Avenue",
        line : "GLC",
        next_inbound : "place-denrd",
        next_outbound : "place-clmnl"
      },
      {
        stop_id : "place-clmnl",
        pretty_name : "Cleveland Circle",
        line : "GLC",
        next_inbound : "place-engav",
        next_outbound : null
      },

      // D line

      {
        stop_id : "place-pktrm",
        pretty_name : "Park Street",
        line : "GLD",
        next_inbound : null,
        next_outbound : "place-boyls"
      },
      {
        stop_id : "place-boyls",
        pretty_name : "Boylston",
        line : "GLD",
        next_inbound : "place-armnl",
        next_outbound : "place-armnl"
      },
      {
        stop_id : "place-armnl",
        pretty_name : "Arlington",
        line : "GLD",
        next_inbound : "place-boyls",
        next_outbound : "place-coecl"
      },
      {
        stop_id : "place-coecl",
        pretty_name : "Copley",
        line : "GLD",
        next_inbound : "place-armnl",
        next_outbound : "place-hymnl"
      },
      {
        stop_id : "place-hymnl",
        pretty_name : "Hynes Convention Center",
        line : "GLD",
        next_inbound : "place-coecl",
        next_outbound : "place-kencl"
      },
      {
        stop_id : "place-kencl",
        pretty_name : "Kenmore",
        line : "GLD",
        next_inbound : "place-hymnl",
        next_outbound : "place-fenwy"
      },
      {
        stop_id : "place-fenwy",
        pretty_name : "Fenway",
        line : "GLD",
        next_inbound : "place-kencl",
        next_outbound : "place-longw"
      },
      {
        stop_id : "place-longw",
        pretty_name : "Longwood",
        line : "GLD",
        next_inbound : "place-fenwy",
        next_outbound : "place-bvmnl"
      },
      {
        stop_id : "place-bvmnl",
        pretty_name : "Brookline Village",
        line : "GLD",
        next_inbound : "place-longw",
        next_outbound : "place-brkhl"
      },
      {
        stop_id : "place-brkhl",
        pretty_name : "Brookline Hill",
        line : "GLD",
        next_inbound : "place-bvmnl",
        next_outbound : "place-bcnfd"
      },
      {
        stop_id : "place-bcnfd",
        pretty_name : "Beaconsfield",
        line : "GLD",
        next_inbound : "place-brkhl",
        next_outbound : "place-rsmnl"
      },
      {
        stop_id : "place-rsmnl",
        pretty_name : "Reservoir",
        line : "GLD",
        next_inbound : "place-bcnfd",
        next_outbound : "place-chhil"
      },
      {
        stop_id : "place-chhil",
        pretty_name : "Chestnut Hill",
        line : "GLD",
        next_inbound : "place-rsmnl",
        next_outbound : "place-newto"
      },
      {
        stop_id : "place-newto",
        pretty_name : "Newton Centre",
        line : "GLD",
        next_inbound : "place-chhil",
        next_outbound : "place-newtn"
      },
      {
        stop_id : "place-newtn",
        pretty_name : "Newton Highlands",
        line : "GLD",
        next_inbound : "place-newto",
        next_outbound : "place-eliot"
      },
      {
        stop_id : "place-eliot",
        pretty_name : "Eliot",
        line : "GLD",
        next_inbound : "place-newtn",
        next_outbound : "place-waban"
      },
      {
        stop_id : "place-waban",
        pretty_name : "Waban",
        line : "GLD",
        next_inbound : "place-eliot",
        next_outbound : "place-woodl"
      },
      {
        stop_id : "place-woodl",
        pretty_name : "Woodland",
        line : "GLD",
        next_inbound : "place-waban",
        next_outbound : "place-river"
      },
      {
        stop_id : "place-river",
        pretty_name : "Riverside",
        line : "GLD",
        next_inbound : "place-woodl",
        next_outbound : null
      },

      // E line

      {
        stop_id : "place-lech",
        pretty_name : "Lechmere",
        line : "GLE",
        next_inbound : null,
        next_outbound : "place-spmnl"
      },
      {
        stop_id : "place-spmnl",
        pretty_name : "Science Park",
        line : "GLE",
        next_inbound : "place-lech",
        next_outbound : "place-north"
      },
      {
        stop_id : "place-north",
        pretty_name : "North Station",
        line : "GLE",
        next_inbound : "place-spmnl",
        next_outbound : "place-haecl"
      },
      {
        stop_id : "place-haecl",
        pretty_name : "Haymarket",
        line : "GLE",
        next_inbound : "place-north",
        next_outbound : "place-gover"
      },
      {
        stop_id : "place-gover",
        pretty_name : "Government Center",
        line : "GLE",
        next_inbound : "place-haecl",
        next_outbound : "place-pktrm"
      },
      {
        stop_id : "place-pktrm",
        pretty_name : "Park Street",
        line : "GLE",
        next_inbound : "place-gover",
        next_outbound : "place-boyls"
      },
      {
        stop_id : "place-boyls",
        pretty_name : "Boylston",
        line : "GLE",
        next_inbound : "place-pktrm",
        next_outbound : "place-armnl"
      },
      {
        stop_id : "place-armnl",
        pretty_name : "Arlington",
        line : "GLE",
        next_inbound : "place-boyls",
        next_outbound : "place-coecl"
      },
      {
        stop_id : "place-coecl",
        pretty_name : "Copley",
        line : "GLE",
        next_inbound : "place-armnl",
        next_outbound : "place-symcl"
      },
      {
        stop_id : "place-prmnl",
        pretty_name : "Prudential",
        line : "GLE",
        next_inbound : "place-coecl",
        next_outbound : "place-cymcl"
      },
      {
        stop_id : "place-symcl",
        pretty_name : "Symphony",
        line : "GLE",
        next_inbound : "place-prmnl",
        next_outbound : "place-nuniv"
      },
      {
        stop_id : "place-nuniv",
        pretty_name : "Northeastern University",
        line : "GLE",
        next_inbound : "place-symcl",
        next_outbound : "place-mfa"
      },
      {
        stop_id : "place-mfa",
        pretty_name : "Museum of Fine Arts",
        line : "GLE",
        next_inbound : "place-nuniv",
        next_outbound : "place-lngmd"
      },
      {
        stop_id : "place-lngmd",
        pretty_name : "Longwood Medical Center",
        line : "GLE",
        next_inbound : "place-mfa",
        next_outbound : "place-brmnl"
      },
      {
        stop_id : "place-brmnl",
        pretty_name : "Brigham Circle",
        line : "GLE",
        next_inbound : "place-lngmd",
        next_outbound : "place-fenwd"
      },
      {
        stop_id : "place-fenwd",
        pretty_name : "Fenwood Road",
        line : "GLE",
        next_inbound : "place-brmnl",
        next_outbound : "place-mispk"
      },
      {
        stop_id : "place-mispk",
        pretty_name : "Mission Park",
        line : "GLE",
        next_inbound : "place-fenwd",
        next_outbound : "place-rvrwy"
      },
      {
        stop_id : "place-rvrwy",
        pretty_name : "Riverway",
        line : "GLE",
        next_inbound : "place-mispk",
        next_outbound : "place-bckhl"
      },
      {
        stop_id : "place-bckhl",
        pretty_name : "Back of the Hill",
        line : "GLE",
        next_inbound : "place-rvrwy",
        next_outbound : "place-hsmnl"
      },
      {
        stop_id : "place-hsmnl",
        pretty_name : "Heath",
        line : "GLE",
        next_inbound : "place-bckhl",
        next_outbound : null
      },

    ]
  )

  process.stdout.write(coll.count() + " stops inserted\n");

  db.close();

});
