'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reviews', [
      {
        user_id: 1,
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vitae culpa maxime, aliquam, nam in impedit recusandae repudiandae praesentium a quos hic sit. Explicabo, reprehenderit provident. Omnis perferendis commodi inventore!"
      },
      {
        user_id: 1,
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vitae culpa maxime, aliquam, nam in impedit recusandae repudiandae praesentium a quos hic sit. Explicabo, reprehenderit provident. Omnis perferendis commodi inventore!"
      },
      {
        user_id: 2,
        review: "This app sucks"
      },
      {
        user_id: 3,
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vitae culpa maxime, aliquam, nam in impedit recusandae repudiandae praesentium a quos hic sit. Explicabo, reprehenderit provident. Omnis perferendis commodi inventore!"
      },
      {
        user_id: 4,
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vitae culpa maxime, aliquam, nam in impedit recusandae repudiandae praesentium a quos hic sit. Explicabo, reprehenderit provident. Omnis perferendis commodi inventore!"
      },
      {
        user_id: 5,
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vitae culpa maxime, aliquam, nam in impedit recusandae repudiandae praesentium a quos hic sit. Explicabo, reprehenderit provident. Omnis perferendis commodi inventore!"
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
