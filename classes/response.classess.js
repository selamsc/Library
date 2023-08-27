class ResponseHandler {
    static success(res, customMessage, data = {}, status = 201) {
        const message = customMessage || 'Successfully created';
        res.status(status).json({ message, data });
    }
    static userList(res, users) {
        const formattedUsers = users.map(user => ({
            id: user.id,
            name: user.name
        }));
        res.status(200).json(formattedUsers);
    }
    static bookList(res, books) {
        const formattedBooks = books.map(book => ({
            id: book.id,
            name: book.name
        }));
        res.status(200).json(formattedBooks);
    }
    static booksByUser(res, data){
        res.status(200).json(data);
    }
}

module.exports = ResponseHandler;
