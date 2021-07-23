"use strict";
const { passwordHash } = require("../helpers/passwordBcrypt");

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Badge, { through: "Achievement" });
      User.hasMany(models.Achievement, { foreignKey: "UserId" });
      User.hasMany(models.Target, { foreignKey: "UserId" });
      User.hasMany(models.Transaction, { foreignKey: "UserId" });
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      fullName: DataTypes.STRING,
      photoProfile: DataTypes.STRING,
      balance: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  User.beforeCreate((user) => {
    user.password = passwordHash(user.password);
  });
  User.beforeUpdate((user) => {
    user.password = passwordHash(user.password);
  });
  return User;
};
