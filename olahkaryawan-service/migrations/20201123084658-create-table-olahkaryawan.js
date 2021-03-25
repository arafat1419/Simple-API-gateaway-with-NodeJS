'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('karyawan',
    {
      id_karyawan : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nama_karyawan : {
        type: Sequelize.STRING,
        allowNull: false
      },
      alamat : {
        type: Sequelize.STRING,
        allowNull: false
      },
      no_hp : {
        type: Sequelize.STRING,
        allowNull: false
      },
      gaji : {
        type: Sequelize.DECIMAL(15,2),
        allowNull: false
      },
      Pangkat : {
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
    return queryInterface.dropTable('karyawan');
  }
};
