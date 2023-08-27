module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Books', [
      {
        id:1,
        title: 'Don Kisot',
        author: 'Cervantes',
        averageRating: 4.5
      },
      {
        id:2,
        title: 'Babalar ve Ogullar',
        author: 'Ivan Turgenyev',
        averageRating: 3.8
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
