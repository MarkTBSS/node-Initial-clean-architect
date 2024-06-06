const { Pool } = require('pg');

// Replace with your actual database credentials
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'Pass1234',
  port: 5432,
});

module.exports = pool;