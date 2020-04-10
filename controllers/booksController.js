// define the routes used to receive information from and send information back to the user
// routes access methods defined in models/book.js

// require the express package and the Router methods
const express = require('express');
const router = express.Router();

// access the model
const book = require('../models/book')


// route to get all books and send them back to the browser to be rendered
router.get('/api/books', (req, res) => {
  // console.log('in booksController api/books')
  book.getAllBooks()
    .then(results => res.json(results))
    .catch(error => res.json(error))
});

// route to get one book from the DB
router.get('/api/book/:name', (req, res) => {
  const bookName = req.params.name;
  // console.log('in booksController api/book/:name')
  console.log('bookName:  ' + bookName)
  book.getOneBook(bookName)
    .then(results => res.json(results))
    .catch(error => res.json(error))
})

// route to retrieve the notes for a particular book
router.get('/api/book/notes/:name', (req, res) => {
  const bookName = req.params.name;
  // console.log('in booksController api/books/notes/:name')
  // console.log('bookName:  ' + bookName)
  book.getBookNotes(bookName)
    .then(results => res.json(results))
    .catch(error => res.status(500).json(error))
})

// route to receive the information for a new book and add it to the DB
router.post('/api/book/new', (req, res) => {
  const { title, coverPhoto, authorId } = req.body;
  // console.log('in booksController api/books/new')
  book.addBook(title, coverPhoto, authorId)
    .then(() => res.status(200).json(true))
    .catch(error => res.status(500).json(error))
});

// route to receive the information for a new note and add it to the DB
router.post('/api/book/note', (req, res) => {
  const { note, bookId } = req.body;
  // console.log('in booksController api/books/note')
  book.addBookNote(note, bookId)
    .then(() => res.status(200).json(true))
    .catch(error => res.status(500).json(error))
})

// route to delete a note from the DB
router.delete('/api/note/:id', (req, res) => {
  book.deleteNote(req.params.id)
    .then(() => res.status(200).json(true))
    .catch(error => res.status(500).json(error))
})

module.exports = router;