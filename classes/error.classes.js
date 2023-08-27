class errorHandler {
    static userNotFound(res, data, message = 'User not found', status = 404) {
        res.status(status).json({ message, data });
    }
    static bookNotFound(res, data, message = 'Book not found', status = 404) {
        res.status(status).json({ message, data });
    }

    static borrowError(res, data, message = 'The book is already taken', status = 400) {
        res.status(status).json({ message, data });
    }
    static returnError(res, data, message = 'User can not return the book', status = 400) {
        res.status(status).json({ message, data });
    }

    static serverError(res, message = 'Internal Server Error', status = 500) {
        res.status(status).json({ error: message });
    }

}

module.exports = errorHandler;
