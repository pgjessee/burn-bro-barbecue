'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Entree_Ingredients', [
      {
        entree_id: 1,
        ingredient_id: 1,
        quantity: 1,
        measurement_id: 1,
      },
      {
        entree_id: 2,
        ingredient_id: 1,
        quantity: 1,
        measurement_id: 1,
      },
      {
        entree_id: 3,
        ingredient_id: 2,
        quantity: 1,
        measurement_id: 1,
      },
      {
        entree_id: 4,
        ingredient_id: 3,
        quantity: 1,
        measurement_id: 1,
      },
      {
        entree_id: 4,
        ingredient_id: 8,
        quantity: 2,
        measurement_id: 3,
      },
      {
        entree_id: 5,
        ingredient_id: 4,
        quantity: 1,
        measurement_id: 1,
      },
      {
        entree_id: 5,
        ingredient_id: 1,
        quantity: 1,
        measurement_id: 1,
      },
      {
        entree_id: 5,
        ingredient_id: 5,
        quantity: 1,
        measurement_id: 1,
      },
      {
        entree_id: 6,
        ingredient_id: 7,
        quantity: 1,
        measurement_id: 1,
      },
      {
        entree_id: 7,
        ingredient_id: 6,
        quantity: 1,
        measurement_id: 1,
      },
      {
        entree_id: 8,
        ingredient_id: 1,
        quantity: 1,
        measurement_id: 1,
      },
      {
        entree_id: 8,
        ingredient_id: 4,
        quantity: 1,
        measurement_id: 1,
      },
      {
        entree_id: 8,
        ingredient_id: 5,
        quantity: 1,
        measurement_id: 1,
      },
      {
        entree_id: 8,
        ingredient_id: 7,
        quantity: 1,
        measurement_id: 1,
      },
      {
        entree_id: 9,
        ingredient_id: 9,
        quantity: 1,
        measurement_id: 2,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Entree_Ingredients', null, {});

  }
};
