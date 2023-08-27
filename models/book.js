const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
    }
  }
  Book.init({
    name: DataTypes.STRING,
    author: DataTypes.STRING,
    averageRating: DataTypes.FLOAT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};
