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
  
    // Add other repository methods if needed
  }
  
  module.exports = BookRepository;