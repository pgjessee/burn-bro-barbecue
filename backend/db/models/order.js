'use strict';

module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    order_total: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        isNumeric: true,
      }
    }
  }, {});

  const columnMapping = {
    through: 'Order_Entree',
    otherKey: 'entree_id',
    foreignKey: 'order_id'
  };

  Order.associate = function(models) {
    Order.belongsTo(models.User, { foreignKey: "user_id"})
    Order.belongsToMany(models.Entree, columnMapping)
    Order.hasMany(models.Order_Entree, { foreignKey: "order_id"})
  };
  return Order;
};
