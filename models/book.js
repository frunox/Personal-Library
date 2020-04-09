// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

class Book {
    getAllBooks() {
        return orm.getAllBooks("books")
    }
    getOneBook(bookTitle) {
        return orm.getOneBook("books", bookTitle)
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

// Export the database functions for the controller (booksController.js).
module.exports = new Book();
