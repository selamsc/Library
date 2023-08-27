const { body } = require('express-validator');

class UserValidator {
    static createUserValidation() {
        return [
            body('name').notEmpty().withMessage('Name is required')
        ];
    }

    static validateRating() {
        return [
            body('score').isFloat({ min: 0, max: 5 }).withMessage('Rating must be between 0 and 5')
        ];
    }
}

module.exports = UserValidator;
