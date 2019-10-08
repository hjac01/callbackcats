var path = require("path");

module.exports = function(app) {
    //home
    app.get("/", function(req, res) {
        res.render("index")
    });
    //teams 
    app.get("/team", function(req, res) {
        res.render("team")
    })
    // teams s,r,
    app.get("/rankings", function(req, res) {
        res.render("rankings")
    });
};