const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Loan extends Model {
   
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId' });
      this.belongsTo(models.Book, { foreignKey: 'bookId' })
    }
  }
  Loan.init({
    userId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER,
    isReturned: DataTypes.BOOLEAN,
    rating: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Loan',
  });
  return Loan;
};