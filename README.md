```
npm init
npm install express
npm install pg

node index.js

[GET] localhost:8000/health
[GET] localhost:8000/api/books
[POST] localhost:8000/api/books
[PATCH] localhost:8000/api/books/:id

Request Body
{
    "title": string,
    "author": string
}

Response Body
{
    "id": int,
    "title": string,
    "author": string
}

```