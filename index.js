const BookController = require('./adapters/controllers/bookController');
const CreateBook = require('./usecase/createBook');
const BookRepository = require('./adapters/repositories/bookRepository');
const pool = require('./config/database'); // Import PostgreSQL pool
const express = require('express')
const app = express()
const port = 8000

const bookRepository = new BookRepository();
const createBook = new CreateBook(bookRepository);
const bookController = new BookController(createBook);

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/posts', bookController.create.bind(bookController));
app.listen(port, async () => {
  try {
    await pool.connect(); // Test database connection
    console.log(`Example app listening on port ${port}`);
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
});