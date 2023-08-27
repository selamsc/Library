module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Loans', [
      {
        userId: 1,
        bookId: 1,
        isReturned: false,
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        bookId: 2,
        isReturned: true,
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Loans', null, {});
  }
};
