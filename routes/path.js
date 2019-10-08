var path = require("path");

module.exports = function(app) {
    //home
    app.get("/", function(req, res) {
        res.render("landing")
    });
    //teams 
    app.get("/team", function(req, res) {
        res.render("team")
    });
    app.get("api/schedule", function(req, res) {
        res.render("schedule")
    })
    // teams s,r,
       app.get("/api/rosters/:id", function(req, res) {
         res.render("rosters")
     });
};