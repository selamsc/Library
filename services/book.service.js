const { Book } = require('../models');

class BookService {
    async getAllBooks() {
        try {
            const books = await Book.findAll();
            return books;
        } catch (error) {
            throw error;
        }
    }

    async getBookById(bookId) {
        try {
            const book = await Book.findByPk(bookId);
            return book;
        } catch (error) {
            throw error;
        }
    }

    async createNewBook(name, author, averageRating) {
        try {
            const newBook = await Book.create({ name, author, averageRating });
            return newBook;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = BookService;
