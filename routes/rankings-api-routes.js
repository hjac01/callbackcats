var db = require("../models");

module.exports = function(app) {
    app.get("api/rankings", function(req, res) {
        db.Rankings.findAll({}).then(function(dbRankings) {
            res.json(dbRankings);
        });
    });
    app.get("api/ranking/:id", function(req, res) {
        db.Rankings.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbRankings){
            res.json(dbRankings);
        });
    });
};