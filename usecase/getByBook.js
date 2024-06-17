class GetByBook {
    constructor(bookRepository) {
        this.bookRepository = bookRepository;
    }
    async execute(param, value) {
        return await this.bookRepository.getBy(param, value);
    }
}
module.exports = GetByBook;
