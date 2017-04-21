var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'assets')));

app.use(bodyParser.urlencoded({
	extended: false
}));

var routes = require('./routes.js');
app.use('/', routes);

app.listen(process.env.PORT || 8000, function(){
	process.env.PORT === undefined? console.log("App listening on PORT 8000"):console.log("App listening on PORT"+ process.env.PORT);
});