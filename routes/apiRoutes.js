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
  app.post("/api/voyager", function(req, res) {
    hashPassword(req.body.password, function(hashedPassword) {
      db.Travel.create({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: hashedPassword,
        birthday: req.body.birthday,
        location: req.body.location,
        travelguide: req.body.travelguide,
        time: req.body.time,
        specialrequests: req.body.specialrequests
      }).then(function(dbVoyager) {
        res.json(dbVoyager);
      });
    });
  });

  // Delete by id
  // commenting this out for now because i dont think we will need to delete any travelers
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Travel.destroy({ where: { id: req.params.id } }).then(function(
  //     dbExample
  //   ) {
  //     res.json(dbExample);
  //   });
  // });
};
