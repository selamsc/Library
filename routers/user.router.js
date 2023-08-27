const express = require('express');
const userController = require('./../controllers/user.controller');
const userValidator = require('./../validators/user.validator');

const router = express.Router();


router.get('/', userController.getUsers);

router.get('/:id', userController.getUserById);

router.post('/',
    userValidator.createUserValidation(),
    userController.createUser);

router.post('/:userId/borrow/:bookId',
    userController.borrowBook);

router.post('/:userId/return/:bookId',
    userValidator.validateRating(),
    userController.returnBook);

module.exports = router;
