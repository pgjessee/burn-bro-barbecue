'use strict';
module.exports = (sequelize, DataTypes) => {
  const Entree = sequelize.define('Entree', {
    entree_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    entree_price: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Entree.associate = function(models) {
    // associations can be defined here
  };
  return Entrees;
};
