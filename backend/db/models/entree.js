'use strict';

const ingredient = require("./ingredient");

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

  const columnMappingOrderEntree = {
    through: 'Order_Entree',
    otherKey: 'order_id',
    foreignKey: 'entree_id'
  }

  const columnMappingEntreeIngredient = {
    through: 'Entree_Ingredient',
    otherKey: 'ingredient_id',
    foreignKey: 'entree_id'
  }

  const columnMappingMeas = {
    through: 'Entree_Ingredient',
    otherKey: 'measurement_id',
    foreignKey: 'entree_id'
  };

  Entree.associate = function(models) {
    Entree.belongsToMany(models.Order, columnMappingOrderEntree);
    Entree.hasMany(models.Order_Entree, { foreignKey: "entree_id" })
    Entree.belongsToMany(models.Ingredient, columnMappingEntreeIngredient)
    Entree.hasMany(models.Entree_Ingredient, {foreignKey: "entree_id"});
    Entree.belongsToMany(models.Measurement, columnMappingMeas)
  };
  return Entree;
};
