class BookController {
    constructor(createBook, getBooks, updateBook, getByBook) {
        this.createBook = createBook;
        this.getBooks = getBooks;
        this.updateBook = updateBook;
        this.getByBook = getByBook; 
    }

    async create(request, response) {
        try {
            const book = await this.createBook.execute(request.body);
            response.status(201).json(book);
        } catch (error) {
            response.status(400).json({ error: error.message });
        }
    }

    async getAll(request, response) {
        try {
            const books = await this.getBooks.execute();
            response.status(200).json(books);
        } catch (error) {
            response.status(400).json({ error: error.message });
        }
    }

    async update(request, response) {
        try {
            const { id } = request.params;
            const book = await this.updateBook.execute(id, request.body);
            response.status(200).json(book);
        } catch (error) {
            response.status(400).json({ error: error.message });
        }
    }

    async getBy(request, response) {
        try {
            const queryParams = request.query;
            console.log(queryParams);
            // Create an empty array to store the results
            const combinedResults = [];
            // Iterate over the keys and values of the queryParams object
            for (const [param, value] of Object.entries(queryParams)) {
                console.log(param, value);
                // Execute getByBook for each param-value pair
                const books = await this.getByBook.execute(param, value);
                console.log(books); // Just for debugging, you can remove this line
                // Add the results to the combinedResults array
                combinedResults.push({ param, value, books });
            }
            // Send a single response with all the combined results
            response.status(200).json(combinedResults);
        } catch (error) {
            response.status(400).json({ error: error.message });
        }
    }
}

module.exports = BookController;
