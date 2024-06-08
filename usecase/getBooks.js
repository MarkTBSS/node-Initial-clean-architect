class GetBooks {
    constructor(bookRepository) {
        this.bookRepository = bookRepository;
    }
    async execute() {
        return await this.bookRepository.getAll();
    }
  }
  module.exports = GetBooks;