'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('products', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      product_name: STRING(30),
      category: STRING(30),
      unit: STRING(30),
      created_at: DATE(6),
      updated_at: DATE(6),
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('products');
  }
};
