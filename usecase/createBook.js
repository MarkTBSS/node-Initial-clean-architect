class CreateBook {
    constructor(bookRepository) {
      this.bookRepository = bookRepository;
    }
  
    async execute(bookData) {
      if (!bookData.title || !bookData.author) {
        throw new Error('Missing required fields: title and author');
      }
      const newBook = await this.bookRepository.create(bookData);
      return newBook;
    }
  }
  
  module.exports = CreateBook;
  