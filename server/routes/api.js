const express = require('express');
const router = express.Router();

const inMemoryBookDB = [
    { id: 1, title: "Gates of Fire", author: "Steven Pressfield", publisher: "Bantam", published_year: "2005"  },
    { id: 2, title: "12 rules for life", author: "Jordan Peterson", publisher: "Random House", published_year: "2012" }
]

router.get('/', (req, res) => {
    res.send('congrats, your api works');
});

router.get('/books', (req, res) => {
    res.status(200)
    .json(inMemoryBookDB);
});

router.get('/books/:id', (req, res) => {
    const id = req.params.id;

    const bookItem = inMemoryBookDB.filter((book) => book.id == id)[0];

    if (!bookItem) {
        res.sendStatus(400);
    }
    else {
        res.status(200).json(bookItem);
    }
});

router.post('/books', (req, res) => {
    const { title, author, publisher, published_year } = req.body;

    const lastId = inMemoryBookDB[inMemoryBookDB.length - 1].id;
    const id = lastId + 1;

    const newBook = { id, title, author, publisher, published_year };

    inMemoryBookDB.push(newBook);

    res.status(201)
    .location(`/api/books/${id}`)
    .json(newBook);
});

 router.delete('books/:id', (req, res) => {
     const id = req.params;

     const bookItem = inMemoryBookDB.filter((book) => book.id == id)[0];
    
     if(!bookItem) {
         res.sendStatus(404);
         return;
     }
     inMemoryBookDB.splice(inMemoryBookDB.indexOf((book) => book.id == id), 1);

     res.sendStatus(200);
 });

router.delete()

module.exports = router;