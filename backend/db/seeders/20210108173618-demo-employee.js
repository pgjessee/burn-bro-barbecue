'use strict';
const bcrypt = require('bcryptjs');
module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Employees', [
        {
          first_name: 'Inventory',
          email: "inventory@burnbro.com",
          hashed_password: bcrypt.hashSync('tM8oP4xG3bT4'),
          is_manager: true,
          is_procurer: true,
          is_active: true
        },
        {
          first_name: 'Supreme Leader',
          email: "peter@burnbro.com",
          hashed_password: bcrypt.hashSync('123'),
          is_manager: true,
          is_procurer: true,
          is_active: true
        },
        {
          first_name: 'Turned',
          email: "turn@burnbro.com",
          hashed_password: bcrypt.hashSync('123'),
          is_manager: true,
          is_procurer: true,
          is_active: false
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Employees', null, {});

  }
};
