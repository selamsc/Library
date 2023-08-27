const { Loan, User, Book } = require('../models');
const errorHandler = require('../classes/error.classes');

class LoanService {
    async borrowBook(userId, bookId) {
        try {
            const isAvailableBorrow = false;
            const user = await User.findByPk(userId);
            if (!user) {
                return errorHandler.userNotFound();
            }

            const book = await Book.findByPk(bookId);
            if (!book) {
                return errorHandler.bookNotFound();
            }

            const existingLoan = await Loan.findOne({
                where: {
                    bookId,
                    isReturned: 0
                }
            });
            if (existingLoan) {
                return isAvailableBorrow;
            }

            const loan = await Loan.create({
                userId: userId,
                bookId: bookId
            });

            return loan;
        } catch (error) {
            throw error;
        }
    }

    async returnBook(userId, bookId, score) {
        try {
            const isAvailableReturn = true;
            const existingLoan = await Loan.findOne({
                where: {
                    userId,
                    bookId,
                    isReturned: 0
                }
            });

            if (existingLoan) {
                existingLoan.rating = score;
                existingLoan.isReturned = 1;
                await existingLoan.save();
                return isAvailableReturn;
            }

            return !isAvailableReturn;

        } catch (error) {
            throw error;
        }
    }
}

module.exports = LoanService;
