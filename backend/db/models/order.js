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
    Order.belongsToMany(Entree, { through: Order_Entree })
    Order.hasMany(models.Order_Entree, { foreignKey: "order_id"})
  };
  return Order;
};
