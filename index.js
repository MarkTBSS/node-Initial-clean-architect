const express = require('express')
const pool = require('./config/database'); 
const booksRouter = require('./routes/bookRoutes');
const app = express()
const port = 8000

app.use(express.json());
app.get('/health', (request, response) => {
    response.send('V1.0')
})
app.use('/api', booksRouter);
app.listen(port, async () => {
    try {
        await pool.connect(); 
        console.log(`Example app listening on port ${port}`);
    } catch (err) {
        console.error('Unable to connect to the database:', err);
    }
});