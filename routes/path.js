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
    app.get("/example", function(req, res) {
        res.render("example")
    });
};