const { User, Loan, Book } = require('../models');

class UserService {
    async getAllUsers() {
        try {
            const users = await User.findAll();
            return users;
        } catch (error) {
            throw error;
        }
    }

    async getUserById(userId) {
        try {
            const userWithLoans = await User.findByPk(userId, {
                include: [{
                    model: Loan,
                    include: [{
                        model: Book
                    }]
                }]
            });

            if (userWithLoans && userWithLoans.Loans) {
                const formattedData = {
                    id: userWithLoans.id,
                    name: userWithLoans.name,
                    books: {
                        past: [],
                        present: []
                    }
                };
                userWithLoans.Loans.forEach(loan => {
                    const book = {
                        id: loan.Book.id,
                        name: loan.Book.name,
                        author: loan.Book.author,
                        averageRating: loan.Book.averageRating
                    };

                    if (loan.isReturned) {
                        formattedData.books.present.push(book);
                    } else {
                        formattedData.books.past.push(book);
                    }
                });
                return formattedData;
            }
            return await User.findByPk(userId);
        } catch (error) {
            throw error;
        }

    }

    async createNewUser(name, email) {
        try {
            const newUser = await User.create({ name, email });
            return newUser;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserService;
