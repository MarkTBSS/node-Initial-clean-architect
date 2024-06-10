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
    async update(bookId, updateData) {
        const fields = [];
        const values = [];
        let index = 1;
        for (const [key, value] of Object.entries(updateData)) {
            fields.push(`${key} = $${index}`);
            values.push(value);
            index++;
        }
        values.push(bookId);
        const result = await pool.query(
            `UPDATE books SET ${fields.join(', ')} WHERE id = $${index} RETURNING *`,
            values
        );
        return result.rows[0];
    }
}
module.exports = BookRepository;