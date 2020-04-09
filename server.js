const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Import routes and give the server access to them.
const apiRoutes = require("./controllers/booksController.js");
const htmlRoutes = require("./controllers/htmlController.js");

app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`)
});