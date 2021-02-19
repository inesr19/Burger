const express = require('express');
const orm = require('./config/orm');
const exphbs = require('express-handlebars');

// initialize express app
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// define a port

// define routes
    // get route to get all burgers
    // post route to post tweet

// app listening function