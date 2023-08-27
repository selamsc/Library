const { validationResult } = require('express-validator');
const errorHandler = require('../classes/error.classes');
const responseHandler = require('../classes/response.classess');
const UserService = require('../services/user.service');
const LoanService = require('../services/loan.service');
const messageConstants = require('../constants/response.constants');

const userService = new UserService();
const loanService = new LoanService();

exports.getUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    return responseHandler.userList(res, users);
  } catch (error) {
    return errorHandler.serverError(res);
  }
};

exports.getUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await userService.getUserById(userId);
    if (!user) {
      return errorHandler.userNotFound(res);
    }
    return responseHandler.booksByUser(res, user);
  } catch (error) {
    return errorHandler.serverError(res);
  }
};

exports.createUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email } = req.body;

  try {
    await userService.createNewUser(name, email);
    return responseHandler.success(res);
  } catch (error) {
    return errorHandler.serverError(res);
  }
};


exports.borrowBook = async (req, res) => {
  const { userId, bookId } = req.params;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const isAvaliableBorrow = await loanService.borrowBook(userId, bookId);
    if (!isAvaliableBorrow) {
      return errorHandler.borrowError(res);
    }
    return responseHandler.success(res, messageConstants.messages.BORROW_CREATED)
  } catch (error) {
    return error;
  }
};

exports.returnBook = async (req, res) => {
  const { userId, bookId } = req.params;
  const { score } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const isAvailableReturn = await loanService.returnBook(userId, bookId, score);
    if (!isAvailableReturn) {
      return errorHandler.returnError(res);
    }
    return responseHandler.success(res, messageConstants.messages.RETURNED)
  } catch (error) {
    return error;
  }
};