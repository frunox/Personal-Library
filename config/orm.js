// Import MySQL connection.
const connection = require("../config/connection.js");

// ORM class for all our SQL statement functions.
class ORM {
    constructor(connection) {
        this.connection = connection;
    }

    // Helper function for SQL syntax.
    // Let's say we want to pass 3 values into the mySQL query.
    // In order to write the query, we need 3 question marks.
    // This helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
    // ["?", "?", "?"].join(', ') => "?, ?, ?";
    // printQuestionMarks(numberOfValues) {
    //     const questionMarks = [];

    //     for (var i = 0; i < numberOfValues; i++) {
    //         questionMarks.push("?");
    //     }

    //     return questionMarks.join(', ');
    // }

    getAllBooks() {
        console.log('in ORM getAllBooks')
        return this.connection.query('SELECT firstName, lastName, title, coverPhoto FROM authors INNER JOIN books ON authors.id = books.authorId')
    }

    getOneBook(bookTitle) {
        console.log('in ORM getOneBook')
        console.log(bookTitle)
        return this.connection.query('SELECT books.id, firstName, lastName, title, coverPhoto FROM authors INNER JOIN books ON authors.id = books.authorId WHERE books.title=?', [bookTitle])
    }

    getBookNotes(bookTitle) {
        console.log('in ORM getBookNotes, bookTitle:  ' + bookTitle)
        return this.connection.query('SELECT notes.id, note FROM notes INNER JOIN books ON books.id = notes.bookId WHERE books.title=?', [bookTitle])
    }

    addBook(title, coverPhoto, authorId) {
        console.log('in ORM addBook')

        return this.connection.query('INSERT INTO books SET ?',
            {
                title,
                authorId,
                coverPhoto
            })
    }

    addBookNote(note, bookId) {
        console.log('in ORM addBookNote')
        return this.connection.query('INSERT INTO notes SET ?',
            {
                note,
                bookId
            })
    }

    deleteNote(noteId) {
        return this.connection.query('DELETE FROM notes WHERE id=?',
            [noteId])
    }
};


// Export the orm object for the model (cat.js).
module.exports = new ORM(connection);