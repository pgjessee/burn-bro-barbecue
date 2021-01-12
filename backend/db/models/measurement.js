'use strict';
module.exports = (sequelize, DataTypes) => {
  const Measurement = sequelize.define('Measurement', {
    unit_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    measurement_abbrev: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {});
  Measurement.associate = function(models) {
    Measurement.hasMany(models.Ingredient, { foreignKey: "measurement_unit_id" })
    Measurement.hasMany(models.Food_Log, { foreignKey: "measurement_id"})
    Measurement.hasMany(models.Entree_Ingredient, { foreignKey: "measurement_id"})
  };
  return Measurement;
};
