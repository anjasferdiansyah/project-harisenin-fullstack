'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user, {
        foreignKey: 'userId',
        targetKey: 'id'
      })
      this.belongsTo(models.products, {
        foreignKey: 'productId',
        targetKey: 'id'
      })
    }
  }
  cart.init({
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    progress: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'cart',
  });
  return cart;
};