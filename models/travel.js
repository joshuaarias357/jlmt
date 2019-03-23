module.exports = function(sequelize, DataTypes) {
  var Travel = sequelize.define("Travel", {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    birthday: DataTypes.DATE,
    location: DataTypes.STRING,
    language: DataTypes.STRING,
    travelguide: DataTypes.BOOLEAN,
    dates: DataTypes.INTEGER,
    special_requests: DataTypes.TEXT
  });
  return Travel;
};
