// schedule routes to view all of the routes 
var db = require ("../models");
var Rosters = require("../models/roster");

module.exports = function(app) {
    //should get all the databases and display ahve the right setting to display data
    app.get("/api/schedule", function(req, res) {
        db.Schedule.findAll({}).then(function(dbSchedule){
            res.json(dbSchedule);
        });
    });

    app.get("/api/rosters/:id", function(req, res) {
      db.Rosters.findAll({where: { school: req.params.id}})
      .then(function (dbRosters){
          res.json(dbRosters)
      })
    });
};