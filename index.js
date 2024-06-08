const express = require('express')
const pool = require('./config/database'); 
const bookRoutes = require('./routes/bookRoutes');
const app = express()
const port = 8000

app.use(express.json());
app.get('/', (request, response) => {
    res.send('Hello World!')
})
app.use('/books', bookRoutes);
app.listen(port, async () => {
    try {
      await pool.connect(); // Test database connection
      console.log(`Example app listening on port ${port}`);
    } catch (err) {
      console.error('Unable to connect to the database:', err);
    }
});