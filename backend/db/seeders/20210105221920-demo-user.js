'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [
        {
          first_name: 'Demo',
          email: "demo@aa.io",
          zip: "74012",
          hashed_password: bcrypt.hashSync('123')
        },
        {
          first_name: 'Peter',
          email: "peter@aa.io",
          zip: "74012",
          hashed_password: bcrypt.hashSync('123')
        },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});

  }
};
