'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reviews', [
      {
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vitae culpa maxime, aliquam, nam in impedit recusandae repudiandae praesentium a quos hic sit. Explicabo, reprehenderit provident.",
        user_id: 1
      },
      {
        review: "This app sucks lol",
        user_id: 2
      },
      {
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vitae culpa maxime, aliquam, nam in impedit recusandae repudiandae praesentium a quos hic sit. Explicabo, reprehenderit provident.",
        user_id: 3
      },
      {
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vitae culpa maxime, aliquam, nam in impedit recusandae repudiandae praesentium a quos hic sit. Explicabo, reprehenderit provident.",
        user_id: 4
      },
      {
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vitae culpa maxime, aliquam, nam in impedit recusandae repudiandae praesentium a quos hic sit. Explicabo, reprehenderit provident.",
        user_id: 5
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
