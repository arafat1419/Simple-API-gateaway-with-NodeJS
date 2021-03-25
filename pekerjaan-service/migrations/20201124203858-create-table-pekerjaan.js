'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('pekerjaan',
    {
      id_pekerjaan : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      Pangkat : {
        type: Sequelize.STRING,
        allowNull: false
      },
      dibutuhkan : {
        type: Sequelize.INTEGER,
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
    return queryInterface.dropTable('pekerjaan');
  }
};
