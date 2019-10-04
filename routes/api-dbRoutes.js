// schedule routes to view all of the routes 
var db = require ("../models");

module.exports = function(app) {
    //should get all the databases and display ahve the right setting to display data
    app.get("/:id", function(req, res) {
        db.schedule.findOne({ where: { id: req.params.id}}),
        db.Roster.findOne({ where: {id: req.params.id}}),
        db.Ranking.findOne({ where:{id: req.params.id}}).then(function(dbRanking, dbRoster, dbSchedule){
            res.json(dbSchedule, dbRoster, dbRanking);
        });
    });

    //comments data base to do a get post.
    app.post("/api/comments", function(req, res) {
        db.Create.create({
          title: req.body.title,
          body: req.body.body,
          category: req.body.category
        }).then(function(dbPost) {
            res.json(dbPost);
          });

    app.get("*", function(req, res) {
        res.render("404");
      });

    });
    
    

    // app.get("/api/schedule", function(req, res) {
    //     db.Schedule.findAll({}).then(function(dbSchedule) {
    //     res.json(dbSchedule)
    //     });
    // });
    // app.get("/api/schedule/:id", function(req, res) {
    //     db.Schedule.findOne({where: {id: req.params.id}}).then(function(dbSchedule) {
    //         res.json(dbSchedule)
    //     });
    // });
};