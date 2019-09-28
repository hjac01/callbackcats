// schedule routes to view all of the routes 
var db = require ("../models");

module.exports = function(app) {
    app.get("/api/schedule", function(req, res) {
        db.Schedule.findAll({}).then(function(dbSchedule) {
        res.json(dbSchedule)
        });
    });
    app.get("/api/schedule/:id", function(req, res) {
        db.Schedule.findOne({where: {id: req.params.id}}).then(function(dbSchedule) {
            res.json(dbSchedule)
        });
    });
};