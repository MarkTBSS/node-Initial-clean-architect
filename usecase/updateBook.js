class UpdateBook {
    constructor(bookRepository) {
        this.bookRepository = bookRepository;
    }
    async execute(bookId, updateData) {
        if (!bookId) {
            throw new Error('Missing required field: bookId');
        }
        if (!updateData || Object.keys(updateData).length === 0) {
            throw new Error('No update data provided');
        }
        const updatedBook = await this.bookRepository.update(bookId, updateData);
        return updatedBook;
    }
  }
  module.exports = UpdateBook;
  