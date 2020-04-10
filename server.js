// require dependencies
const express = require('express');

const app = express();

// define a port for either local use or as deployed
const PORT = process.env.PORT || 8080;

// use express methods to convert user input
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// restrict public access to the public folder
app.use(express.static('public'));

// Import routes and give the server access to them.
const apiRoutes = require("./controllers/booksController.js");
const htmlRoutes = require("./controllers/htmlController.js");

// tell the application to route api and html requests to the appropriate controllers
app.use(apiRoutes);
app.use(htmlRoutes);

// open the port and listen for user requests
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`)
});