const bodyParser = require('body-parser');
const express = require('express');
const orm = require('./config/orm');
const exphbs = require('express-handlebars');

// initialize express app
const app = express();
const PORT = process.env.PORT || 8080;

// include middleware to parse json
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.static("public"));

// handlebars 
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// route to controller
const route = require('./controllers/burgers_controller');

app.use(route);

// app is listening
app.listen(PORT, function() {
    console.log('App is listening on PORT: ' + PORT);
});