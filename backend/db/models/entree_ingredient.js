'use strict';
module.exports = (sequelize, DataTypes) => {
  const Entree_Ingredient = sequelize.define('Entree_Ingredient', {
    entree_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ingredient_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    measurement_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  
  Entree_Ingredient.associate = function(models) {
    Entree_Ingredient.belongsTo(models.Entree, { foreignKey: "entree_id"});
    Entree_Ingredient.belongsTo(models.Ingredient, { foreignKey: "ingredient_id"});
    Entree_Ingredient.belongsTo(models.Measurement, { foreignKey: "measurement_id"});
  };
  return Entree_Ingredient;
};
