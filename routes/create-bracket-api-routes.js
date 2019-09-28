var db = require("../models");

module.exports = function(app) {
    app.post("api/brackets", function(req, res) {
        db.Brackets.create().then(function(dbBrackets) {
            res.json(Brackets);
        });
    });

    app.delete("api/brackets/:id", function(req, res) {
        db.Brackets.destroy({where: {id: req.params.id }}).then(function(dbBrackets) {
            res.json(dbBrackets)
        })
    })
}