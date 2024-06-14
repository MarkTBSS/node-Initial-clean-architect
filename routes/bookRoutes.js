const express = require('express');
const BookController = require('../adapters/controllers/bookController');
const CreateBook = require('../usecase/createBook');
const GetBooks = require('../usecase/getBooks');
const UpdateBook = require('../usecase/updateBook');
const GetByBook = require('../usecase/getByBook');
const BookRepository = require('../adapters/repositories/bookRepository');

const router = express.Router();

const bookRepository = new BookRepository();

const createBook = new CreateBook(bookRepository);
const getBooks = new GetBooks(bookRepository);
const updateBook = new UpdateBook(bookRepository);
const getByBook = new GetByBook(bookRepository);

const bookController = new BookController(createBook, getBooks, updateBook, getByBook);

router.post('/books', bookController.create.bind(bookController));
router.get('/books', bookController.getAll.bind(bookController));
router.patch('/books/:id', bookController.update.bind(bookController));
router.get('/books/search', bookController.getBy.bind(bookController));

module.exports = router;
