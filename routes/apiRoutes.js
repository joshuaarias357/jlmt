var bcrypt = require("bcrypt");
var saltRounds = 10;

var db = require("../models");

module.exports = function(app) {
  // Get all travelers
  app.get("/api/voyager", function(req, res) {
    db.Travel.findAll({}).then(function(dbVoyager) {
      res.json(dbVoyager);
    });
  });

  function hashPassword(password, cb) {
    bcrypt.genSalt(saltRounds, function(err, salt) {
      bcrypt.hash(password, salt, function(err, hash) {
        cb(hash);
      });
    });
  }

  // Create new traveler
  app.post("/api/voyager/", function(req, res) {
    console.log(req.body);
    hashPassword(req.body.password, function(hashedPassword) {
      db.Travel.create({
        username: req.body.username,
        password: hashedPassword,
        email: req.body.email,
        name: req.body.name,
        birthday: req.body.birthday,
        location: req.body.location,
        travelguide: req.body.travelguide,
        dates: req.body.time,
        special_requests: req.body.specialrequests
      }).then(function(dbVoyager) {
        res.json(dbVoyager);
      });
    });
  });
};
