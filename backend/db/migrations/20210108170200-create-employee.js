'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(256),
        allowNull: false,
        unique: true
      },
      hashed_password: {
        type: Sequelize.STRING.BINARY,
        allowNull: false
      },
      is_manager: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      is_procurer: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
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
    return queryInterface.dropTable('Employees');
  }
};
