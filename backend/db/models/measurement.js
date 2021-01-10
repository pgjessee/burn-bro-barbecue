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
    // associations can be defined here
  };
  return Measurement;
};
