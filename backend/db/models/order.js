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
  Order.associate = function(models) {
    Order.belongsTo(models.User, { foreignKey: "user_id"})
  };
  return Order;
};
