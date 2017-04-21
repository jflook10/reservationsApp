var express = require('express');
var bodyParser = require ('body-parser');
var app = express();
var path = require('path');
var mysql = require('mysql');
var router = express.Router();

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'hotRestaurant'
});

app.use(bodyParser.urlencoded({
	extended: false
}));

connection.connect();

router.get('/', function(req, res){
	res.sendFile(path.join(__dirname, 'index.html'));
});

router.get('/tables', function(req, res){
	res.sendFile(path.join(__dirname, 'tables.html'));
});

router.get('/reservationsAPI', function(req, res){
	connection.query('SELECT * FROM reservations', function(err, data){
		if(err) throw err;
		res.send(data);
	});
});

router.get('/reserve', function(req, res){
	res.sendFile(path.join(__dirname,'reserve.html'))
});

router.post('/reserve', function(req, res){
	console.log(req.body);

	let name = req.body.name;
	let phoneNumber = req.body.phoneNumber;
	let email = req.body.email;
	let startTime = req.body.startTime;
	let partySize = req.body.partySize;

	connection.query('INSERT INTO reservations(name, phoneNumber, email, startTime, partySize) VALUES(?,?,?,?,?)', [name, phoneNumber, email, startTime, partySize]);

	res.redirect('/tables');
});

module.exports = router;