var Sails = require('sails');
// var Barrels = require('barrels');
// require('request');

// Global before hook
before(function (done) {
  // Lift Sails with test database
  Sails.lift({
    log: {
      level: 'error'
    }
  }, function(err, sails) {
    if (err)
      return done(err);
    else
      return done();

    // Load fixtures
    // var barrels = new Barrels();

    // Save original objects in `fixtures` variable
    // fixtures = barrels.data;

    // Populate the DB
    // barrels.populate(function(err) {
    //   done(err, sails);
    // });
  });
});

// Global after hook
after(function (done) {
  console.log(); // Skip a line before displaying Sails lowering logs
  sails.lower(done);
});
