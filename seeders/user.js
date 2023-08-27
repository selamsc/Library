module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        id:1,
        name: 'selam',
        email: 'selam@test.com'
      },
      {
        id:2,
        name: 'selam2',
        email: 'selam2@test.com'
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
