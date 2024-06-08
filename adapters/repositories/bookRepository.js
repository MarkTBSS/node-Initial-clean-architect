const pool = require('../../config/database');

class BookRepository {
    async create(bookData) {
        const { title, author } = bookData;
        const result = await pool.query(
            'INSERT INTO books (title, author) VALUES ($1, $2) RETURNING *',
            [title, author]
        );
        return result.rows[0];
    }
    async getAll() {
        const result = await pool.query('SELECT * FROM books');
        return result.rows;
    }
}
module.exports = BookRepository;