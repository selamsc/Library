const { body } = require('express-validator');

class BookValidator {
    static validate() {
        return [
            body('name').notEmpty().withMessage('Name is required'),
            body('author').notEmpty().withMessage('Author is required'),
            body('averageRating').isFloat({ min: 0, max: 5 }).withMessage('Average rating must be between 0 and 5')
        ];
    }
}

module.exports = BookValidator;
