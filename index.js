/** @format */

const express = require("express");
const morgan = require("morgan");
const compression = require("compression");

const app = express();

// Use morgan to log requests to the console
app.use(morgan());

// Use compression to compress responses
app.use(compression());

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
