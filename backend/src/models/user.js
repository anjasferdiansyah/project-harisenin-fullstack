'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.userDetail, {
        foreignKey: 'user_id',
        sourceKey: 'id',
      });
      this.hasMany(models.cart, {
        foreignKey: 'userId',
        sourceKey: 'id',
      })
    }
  }
  user.init(
    {
      phoneNumber: DataTypes.STRING,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'user',
    }
  );
  return user;
};
