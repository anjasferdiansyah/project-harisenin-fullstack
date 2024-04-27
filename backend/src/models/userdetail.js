'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user, { foreignKey: 'user_id', targetKey: 'id' });
    }
  }
  userDetail.init(
    {
      user_id: DataTypes.INTEGER,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      gender: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'userDetail',
    }
  );
  return userDetail;
};
