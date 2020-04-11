// Import MySQL connection.
const connection = require("../config/connection.js");

// ORM class for all our SQL statement functions.
class ORM {
    // constructor function, allows the connection to be passed to the methods in the class ORM
    constructor(connection) {
        this.connection = connection;
    }

    // method to query the database for all books and returns all the information for each book
    getAllBooks() {
        // console.log('in ORM getAllBooks')
        return this.connection.query('SELECT firstName, lastName, title, coverPhoto FROM authors INNER JOIN books ON authors.id = books.authorId')
    }

    // method to retrieve 1 book from the database based on the title
    getOneBook(bookTitle) {
        // console.log('in ORM getOneBook')
        // console.log(bookTitle)
        return this.connection.query('SELECT books.id, firstName, lastName, title, coverPhoto FROM authors INNER JOIN books ON authors.id = books.authorId WHERE books.title=?', [bookTitle])
    }

    // method to get all the notes for a specific book by the book title
    getBookNotes(bookTitle) {
        // console.log('in ORM getBookNotes, bookTitle:  ' + bookTitle)
        return this.connection.query('SELECT notes.id, note FROM notes INNER JOIN books ON books.id = notes.bookId WHERE books.title=?', [bookTitle])
    }

    // method to add a book to the database based on information provided by the user
    addBook(title, coverPhoto, authorId) {
        // console.log('in ORM addBook')

        return this.connection.query('INSERT INTO books SET ?',
            {
                title,
                authorId,
                coverPhoto
            })
    }

    // method to add a note for a specific book based on the id of the book
    addBookNote(note, bookId) {
        // console.log('in ORM addBookNote')
        return this.connection.query('INSERT INTO notes SET ?',
            {
                note,
                bookId
            })
    }

    // method to delete a note
    deleteNote(noteId) {
        return this.connection.query('DELETE FROM notes WHERE id=?',
            [noteId])
    }
};

// Export the orm object for the model (books.js).
module.exports = new ORM(connection);