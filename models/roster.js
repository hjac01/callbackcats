module.exports = function (sequelize, DataTypes) {
    var Rosters = sequelize.define("Rosters", {
        number: DataTypes.INTEGER,
        name: DataTypes.STRING,
        class: DataTypes.STRING,
        position: DataTypes.STRING,
        birth_city: DataTypes.STRING,
        highschool: DataTypes.STRING,
        school: DataTypes.STRING
    });

    return Rosters;

};