'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order_Entree = sequelize.define('Order_Entree', {
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    entree_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Order_Entree.associate = function(models) {
    Order_Entree.belongsTo(models.Order, { foreignKey: "order_id"});
    Order_Entree.belongsTo(models.Entree, { foreignKey: "entree_id"})
  };
  return Order_Entree;
};
