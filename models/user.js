const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class User extends Model {
    static associate(models) {
      this.hasMany(models.Loan, { foreignKey: 'userId' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
