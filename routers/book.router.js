const express = require('express');
const bookController = require('./../controllers/book.controller');
const bookValidator = require('./../validators/book.validator');
const router = express.Router();


router.get('/', bookController.getBooks);

router.get('/:id', bookController.getBookById);

router.post('/',
    bookValidator.validate(),
    bookController.createBook
);


module.exports = router;
