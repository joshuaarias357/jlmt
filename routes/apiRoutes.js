var db = require("../models");

module.exports = function(app) {
  // Get all travelers
  app.get("/api/voyager", function(req, res) {
    db.Travel.findAll({}).then(function(dbVoyager) {
      res.json(dbVoyager);
    });
  });

  // Create new traveler
  app.post("/api/voyager", function(req, res) {
    db.Travel.create({
      name: req.body.name,
      location: req.body.location,
      language: req.body.language,
      travelguide: req.body.travelguide
    }).then(function(dbVoyager) {
      res.json(dbVoyager);
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
