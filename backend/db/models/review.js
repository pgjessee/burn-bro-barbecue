'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    review: {
      type: DataTypes.STRING(500),
      allowNull: false,
      validate: {
        max: 500
      }
    }
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.User, {foreignKey: "user_id"})
  };
  return Review;
};
