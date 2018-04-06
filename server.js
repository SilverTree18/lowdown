// Dependencies
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
// var logger = require("morgan");
var app = express();

// Require request and cheerio. This makes the scraping possible
// var request = require("request");
// var cheerio = require("cheerio");
// var axios = require("axios");

//connect
 
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");
 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 
var routes = require("./controllers/headline.js");

app.get('/', function (req, res) {
    res.render('home');
});
 
app.listen(3000);
