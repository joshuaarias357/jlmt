module.exports = function(sequelize, DataTypes) {
  var Travel = sequelize.define("Travel", {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    language: DataTypes.STRING,
    travelguide: DataTypes.BOOLEAN
  });
  return Travel;
};
