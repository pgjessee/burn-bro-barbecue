'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Food_Logs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ingredient_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Ingredients"}
      },
      employee_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Employees"}
      },
      food_log_delta: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      measurement_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Measurements"}
      },
      beginning_balance: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      ending_balance: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    return queryInterface.dropTable('Food_Logs');
  }
};
