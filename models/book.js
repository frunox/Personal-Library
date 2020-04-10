// Import the ORM to access functions that will interact with the database.
const orm = require("../config/orm.js");

class Book {
    getAllBooks() {
        return orm.getAllBooks("books")
    }
    getOneBook(bookTitle) {
        console.log('in Model, bookTitle:  ' + bookTitle)
        return orm.getOneBook(bookTitle)  // modified, took out "books"
    }
    getBookNotes(bookTitle) {
        console.log('in Model getBookNotes, bookTitle:  ' + bookTitle)
        return orm.getBookNotes(bookTitle)  // modified, took out "books"
    }
    addBook(title, coverPhoto, authorId) {
        return orm.addBook(title, coverPhoto, authorId)
    }
    addBookNote(note, bookId) {
        return orm.addBookNote(note, bookId)
    }
    deleteNote(noteId) {
        return orm.deleteNote(noteId)
    }

};

// Export the controller's database methods for the controller (booksController.js).
module.exports = new Book();
