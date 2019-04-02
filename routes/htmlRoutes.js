var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Travel.findAll({}).then(function(dbVoyager) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbVoyager
      });
    });
  });

  app.get("/aboutus", function(req, res) {
    db.Travel.findAll({}).then(function() {
      res.render("aboutus");
    });
  });

  app.get("/survey", function(req, res) {
    db.Travel.findAll({}).then(function(dbVoyager) {
      res.render("survey", {
        location: dbVoyager
      });
    });
  });

  app.get("/result", function(req, res) {
    db.Travel.findAll({ where: { location: "France" } }).then(function(
      dbVoyager
    ) {
      res.render("result", {
        result: dbVoyager
      });
    });
  });

  app.get("/services", function(req, res) {
    db.Travel.findAll({}).then(function(dbVoyager) {
      res.render("services", {
        location: dbVoyager
      });
    });
  });
  // Load example page and pass in an example by id
  app.get("/voyager/:location", function(req, res) {
    var guyLocation = req.params.location;
    db.Travel.findAll({ where: { location: guyLocation } }).then(function(
      dbVoyager
    ) {
      res.render("similiarVoyagers", {
        example: dbVoyager
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
