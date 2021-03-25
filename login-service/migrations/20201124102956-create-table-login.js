'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('login',
    {
      email : {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      password : {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at : {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at : {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('login');
  }
};
