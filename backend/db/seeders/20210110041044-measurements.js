'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Measurements', [
      {
        unit_name: 'pounds',
        measurement_abbrev: 'lbs'
      },
      {
        unit_name: 'fluid ounces',
        measurement_abbrev: 'fl oz'
      },
      {
        unit_name: 'buns',
        measurement_abbrev: 'buns'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Measurements', null, {});
  }
};
