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

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Travel.findOne({ where: { id: req.params.id } }).then(function(
      dbVoyager
    ) {
      res.render("example", {
        example: dbVoyager
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
