class BookController {
    constructor(createBook, getBooks) {
        this.createBook = createBook;
        this.getBooks = getBooks;
    }
    async create(request, response) {
        try {
            const book = await this.createBook.execute(request.body);
            response.status(201).json(book);;
        } catch (error) {
            response.status(400).json({ error: error.message });
        }
    }
    async getAll(request, response) {
        try {
            const books = await this.getBooks.execute();
            response.status(200).json(books);
        } catch (error) {
            response.status(400).json({ error: error.message });
        }
    }
}
module.exports = BookController;
  