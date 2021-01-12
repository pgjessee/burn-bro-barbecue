'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Entree_Ingredients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      entree_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Entrees"}
      },
      ingredient_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Ingredients"}
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      measurement_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Measurements"}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Entree_Ingredients');
  }
};
