const express = require('express');
const BookController = require('../adapters/controllers/bookController');
const CreateBook = require('../usecase/createBook');
const GetBooks = require('../usecase/getBooks');
const BookRepository = require('../adapters/repositories/bookRepository');

const router = express.Router();

const bookRepository = new BookRepository();
const createBook = new CreateBook(bookRepository);
const getBooks = new GetBooks(bookRepository);
const bookController = new BookController(createBook, getBooks);

router.post('/post', bookController.create.bind(bookController));
router.get('/get', bookController.getAll.bind(bookController));

module.exports = router;
