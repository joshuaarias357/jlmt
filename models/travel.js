module.exports = function(sequelize, DataTypes) {
  var Travel = sequelize.define(
    "Travel",
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      name: DataTypes.STRING,
      birthday: DataTypes.STRING,
      location: DataTypes.STRING,
      travelguide: DataTypes.STRING,
      dates: DataTypes.STRING,
      special_requests: DataTypes.TEXT
    },
    {
      freezeTableName: true
    }
  );
  return Travel;
};
