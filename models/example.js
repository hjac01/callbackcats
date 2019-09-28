module.exports = function (sequelize, DataTypes) {
  var Games = sequelize.define("Games", {
    year: DataTypes.INTEGER,
    round: DataTypes.INTEGER,
    region_number: DataTypes.INTEGER,
    region_name: DataTypes.STRING,
    seed: DataTypes.INTEGER,
    score: DataTypes.INTEGER,
    team: DataTypes.STRING,
    team_2: DataTypes.STRING,
    score_2: DataTypes.INTEGER,
    seed_2: DataTypes.INTEGER
  });
  return Games;
};