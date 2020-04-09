# Personal Library

## Instructions

### Phase 1 - Database
- Create a database called library_db
- Create 3 tables
  - Authors
    - firstName
    - lastName
  - Books
    - title
    - coverPhoto
    - authorId
  - Notes
    - note
    - bookId

### Phase 2 - Node/MySQL Connection
- Create a connection to the database using mysql npm package
- Create a class called DB with the following properties and methods: 
  - Properties
    - connection
  - Methods
    - getAllBooks
    - getOneBook
    - getBookNotes
    - addBook
    - addBookNote
    - **deleteNote

### Phase 3 - Setup Server
- Create a localhost connection with express npm package
- Setup Routes
  - API Routes
    - GET route for returning all books
    - GET route for returning one book
    - POST route for adding a book
    - POST route for adding a book note
    - DELETE route for deleting a note
  - Test routes with POSTMAN
  - HTML Routes
    - /
    - /library
    - /addBook
    - /bookDetail
  
### Phase 4 - Connect Client Side to Server
  - Use AJAX to hit all API routes