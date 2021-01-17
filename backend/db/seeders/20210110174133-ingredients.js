'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Ingredients', [
      {
        ingredient_name: 'Brisket',
        food_in_stock: 100,
        measurement_unit_id: 1,
      },
      {
        ingredient_name: 'Baby Back Ribs',
        food_in_stock: 100,
        measurement_unit_id: 1,
      },
      {
        ingredient_name: 'Pulled Pork',
        food_in_stock: 100,
        measurement_unit_id: 1,
      },
      {
        ingredient_name: 'Sausage',
        food_in_stock: 100,
        measurement_unit_id: 1,
      },
      {
        ingredient_name: 'Bacon',
        food_in_stock: 100,
        measurement_unit_id: 1,
      },
      {
        ingredient_name: 'Chicken Drumsticks',
        food_in_stock: 100,
        measurement_unit_id: 1,
      },
      {
        ingredient_name: 'Bologna',
        food_in_stock: 100,
        measurement_unit_id: 1,
      },
      {
        ingredient_name: 'Bread Buns',
        food_in_stock: 100,
        measurement_unit_id: 3,
      },
      {
        ingredient_name: 'Soda Syrup',
        food_in_stock: 100,
        measurement_unit_id: 2,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Ingredients', null, {});

  }
};
