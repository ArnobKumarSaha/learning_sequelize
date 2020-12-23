'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable("users",{
      "id":{
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      "name":{
        type: Sequelize.STRING(21),
        allowNull: false,
        unique: true,
      },
      "password":{
        type: Sequelize.INTEGER(21),
        allowNull: false,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};