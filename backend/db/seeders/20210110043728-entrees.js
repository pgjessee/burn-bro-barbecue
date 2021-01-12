'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Entrees', [
      {
        entree_name: 'Chopped Brisket',
        entree_price: 11,
      },
      {
        entree_name: 'Sliced Brisket',
        entree_price: 13,
      },
      {
        entree_name: 'Baby Back Ribs',
        entree_price: 18,
      },
      {
        entree_name: 'Pulled Pork Sandwich',
        entree_price: 11,
      },
      {
        entree_name: 'The Fatty',
        entree_price: 11,
      },
      {
        entree_name: 'Smoked Bologna',
        entree_price: 8,
      },
      {
        entree_name: 'Chicken Drumsticks',
        entree_price: 8,
      },
      {
        entree_name: 'Frankenstein',
        entree_price: 14,
      },
      {
        entree_name: 'Fountain drink',
        entree_price: 2,
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Entrees', null, {});

  }
};
