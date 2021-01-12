'use strict';
module.exports = (sequelize, DataTypes) => {
  const Entree = sequelize.define('Entree', {
    entree_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    entree_price: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Entree.associate = function(models) {
    Entree.belongsToMany(Order, { through: Order_Entree });
    Entree.hasMany(models.Order_Entree, { foreignKey: "entree_id" })
  };
  return Entree;
};
