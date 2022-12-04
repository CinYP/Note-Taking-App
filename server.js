const express = require('express');

const app = express();
const PORT = 3001;
app.use(express.static('public'));


// Middleware for the parsing of JSON data
app.use(express.json());

// Middleware for parsing of URL encoded data
//app.use(express.urlencoded({ extended: true }));