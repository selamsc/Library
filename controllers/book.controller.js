const { validationResult } = require('express-validator');
const errorHandler = require('../classes/error.classes');
const responseHandler = require('../classes/response.classess');
const BookService = require('../services/book.service');
const messageConstants = require('../constants/response.constants');

const bookService = new BookService();

exports.getBooks = async (req, res) => {
  try {
    const books = await bookService.getAllBooks();
    return responseHandler.bookList(res, books);
  } catch (error) {
    return errorHandler.serverError(res);
  }
};

exports.getBookById = async (req, res) => {
  const bookId = req.params.id;

  try {
    const book = await bookService.getBookById(bookId);
    if (!book) {
      return errorHandler.bookNotFound(res);
    }

    res.status(200).json({
      name: book.name,
      author: book.author,
      averageRating: book.averageRating
    });
  } catch (error) {
    console.error(error);
    return errorHandler.serverError(res);
  }
};

exports.createBook = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, author, averageRating } = req.body;

  try {
    await bookService.createNewBook(name, author, averageRating);
    return responseHandler.success(res, messageConstants.messages.CREATED );

  } catch (error) {
    return errorHandler.serverError(res);
  }
};
