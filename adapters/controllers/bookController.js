class BookController {
    constructor(createBook) {
      this.createBook = createBook;
    }
  
    async create(req, res) {
      try {
        const book = await this.createBook.execute(req.body);
        res.status(201).json(book).send('Post created successfully.');;
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  }
  
  module.exports = BookController;
  