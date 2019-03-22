module.exports = function(sequelize, DataTypes) {
  var Travel = sequelize.define("Travel", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Travel;
};
