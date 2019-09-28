var db = require("../models");

module.exports = function(app) {
// get all of the rosters
    app.get("api/roster", function(req, res) {
        db.Roster.findAll({}).then(function(dbRsoter) {
            res.json(dbRsoter);
        });
    });

// find someone in the roster
    app.get("/api/roster/:id", function(req, res) {
        db.Roster.findOne({where: {id: req.params.id}}).then(function(dbRsoter) {
            res.json(dbRsoter)
        });
    });
};