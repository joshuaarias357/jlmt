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

  //
  app.get("/survey", function(req, res) {
    db.Travel.findAll({}).then(function(dbVoyager) {
      res.render("survey", {
        location: dbVoyager
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/voyager/:location", function(req, res) {
    db.Travel.findAll({ where: { location: req.params.location } }).then(
      function(dbVoyager) {
        res.render("similiarVoyagers", {
          example: dbVoyager
        });
      }
    );
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
