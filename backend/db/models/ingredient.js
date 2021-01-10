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
  Ingredient.associate = function(models) {
    Ingredient.belongsTo(models.Measurement, { foreignKey: "measurement_unit_id"})
  };
  return Ingredient;
};
