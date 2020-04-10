// define routes for displaying pages in the browser
const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/library', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/library.html'))
});

router.get('/bookDetail/:title', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/bookDetail.html'))
});

router.get('/addBook', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/addBook.html'))
});

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
});

module.exports = router;