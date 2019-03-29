var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");
//Require db for testing
var db = require("../models");

//Require routes
//var routes = require("../routes");

var expect = chai.expect;

chai.use(chaiHttp);
var request;

describe("GET /api/voyager", function() {
  // Before each test begins:
  // - create a new request object
  // - re-create the test database schema
  beforeEach(function() {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  it("should find all examples", function(done) {
    // Add some examples to the db to test with
    db.Travel.bulkCreate([
      {
        username: "traveler1",
        password: "password1",
        name: "Jane Doe",
        birthday: 01011980,
        location: "italy",
        language: "italian",
        travelguide: true,
        dates: 052020,
        special_requests: "vegetarian"
      },
      {
        username: "traveler2",
        password: "password2",
        name: "John Doe",
        birthday: 01011970,
        location: "france",
        language: "french",
        travelguide: false,
        dates: 032020,
        special_requests: "none"
      }
    ]).then(function() {
      // Request the route that returns all examples
      request.get("/api/voyager").end(function(err, res) {
        var responseStatus = res.status;
        var responseBody = res.body;

        // Run assertions on the response
        expect(err).to.be.null;

        expect(responseStatus).to.equal(200);

        expect(responseBody)
          .to.be.an("array")
          .that.has.lengthOf(2);

        // expect(responseBody[0])
        //   .to.be.an("object")
        //   .that.includes({
        //     text: "First Example",
        //     description: "First Description"
        //   });

        // expect(responseBody[1])
        //   .to.be.an("object")
        //   .that.includes({
        //     text: "Second Example",
        //     description: "Second Description"
        //   });

        // The `done` function is used to end any asynchronous tests
        done();
      });
    });
  });
});

describe("");
