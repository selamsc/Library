const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routers/user.router');
const bookRouter = require('./routers/book.router');

const app = express();

app.use(bodyParser.json());

app.use('/users', userRouter);
app.use('/books', bookRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



