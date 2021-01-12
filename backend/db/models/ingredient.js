'use strict';

module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define('Ingredient', {
    ingredient_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    food_in_stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
        min: 0,
      }
    },
    measurement_unit_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});

  const columnMappingFoodLog = {
    through: "Food_Log",
    otherKey: "employee_id",
    foreignKey: "ingredient_id"
  };

  const columnMappingEntreeIng = {
    through: "Entree_Ingredient",
    otherKey: "entree_id",
    foreignKey: "ingredient_id"
  };


  Ingredient.associate = function(models) {
    Ingredient.belongsTo(models.Measurement, { foreignKey: "measurement_unit_id"})
    Ingredient.belongsToMany(models.Employee, columnMappingFoodLog)
    Ingredient.hasMany(models.Food_Log, { foreignKey: "ingredient_id"})
    Ingredient.belongsToMany(models.Entree, columnMappingEntreeIng)
    Ingredient.hasMany(models.Entree_Ingredient, {foreignKey: "ingredient_id"})
  };
  return Ingredient;
};
