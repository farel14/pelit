"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Users", "pushToken", Sequelize.STRING);
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
<<<<<<< HEAD
    return queryInterface.removeColumn('Users', 'pushToken', Sequelize.STRING)
=======
    return queryInterface.removeColumn("Users", "pushToken", Sequelize.STRING);
>>>>>>> 2b9e8a9359b211f6753b7d9893e6a710ad3bdbc8
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
