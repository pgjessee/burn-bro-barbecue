'use strict';
module.exports = (sequelize, DataTypes) => {
  const Food_Log = sequelize.define('Food_Log', {
    ingredient_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    food_log_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    measurement_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Food_Log.associate = function(models) {
    Food_Log.belongsTo(models.Ingredient, { foreignKey: "ingredient_id"});
    Food_Log.belongsTo(models.Employee, { foreignKey: "employee_id"});
    Food_Log.belongsTo(models.Measurement, { foreignKey: "measurement_id"});
  };
  return Food_Log;
};
