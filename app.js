var express = require('express');
var app = express();
var path = require('path');
const port = process.env.PORT || 8080;


// set the view engine to ejs
app.set('view engine', 'ejs');
// use res.render to load up an ejs view file
app.use( express.static( "public" ) );


// prepare server

app.use('/', express.static(__dirname + '/www')); // redirect root
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

// index page
app.get('/', function(req, res) {
    res.render('page/index');
});



app.listen(port, function () {
  console.log('App listening on port 8080!');
});

