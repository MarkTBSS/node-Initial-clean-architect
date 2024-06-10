class BookController {
    constructor(createBook, getBooks, updateBook) {
        this.createBook = createBook;
        this.getBooks = getBooks;
        this.updateBook = updateBook;
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
    async update(request, response) {
        try {
            const { id } = request.params;
            const book = await this.updateBook.execute(id, request.body);
            response.status(200).json(book);
        } catch (error) {
            response.status(400).json({ error: error.message });
        }
    }
}
module.exports = BookController;
  