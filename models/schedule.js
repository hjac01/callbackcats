module.exports = function (sequelize, DataTypes) {
    var schedule = sequelize.define("schedule", {
        game_num: DataTypes.INTEGER,
        team: DataTypes.STRING,
        team_2: DataTypes.STRING,
        region: DataTypes.STRING
    });
    return schedule
}