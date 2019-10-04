module.exports = function (sequelize, DataTypes) {
    var Schedule = sequelize.define("Schedule", {
        game_num: DataTypes.INTEGER,
        team: DataTypes.STRING,
        team_2: DataTypes.STRING,
        region: DataTypes.STRING
    });
    return Schedule
}