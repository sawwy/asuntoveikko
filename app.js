var express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/apartmentAPI');
var apartment = require('./models/apartmentModel');

var Apartment = mongoose.model('Apartment');
	
var app = express();

var port = process.env.PORT || 3000;

var apartmentRouter = express.Router();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

apartmentRouter.route('/Apartments')
	.post(function(req, res) {
		var apartment = new Apartment(req.body);
		
		console.log(apartment);
		apartment.save();
		res.status(201).send(apartment);
	})
	.get(function(req, res) {
		
		var query = {};
		if(req.query.address) {
			query.address = req.query.address;
		}
		Apartment.find(query, function(err, apartments) {
			if(err)
				res.status(500);
			else 
				res.json(apartments);
		});
	});

apartmentRouter.route('/Apartments/:apartmentId')
	
	.get(function(req, res) {
		
		Apartment.findById(req.params.apartmentId, function(err, apartment) {
			if(err)
				res.status(500);
			else 
				res.json(apartment);
		});
	});
	
app.use('/api', apartmentRouter);

app.get('/', function(req, res) {
	res.send('Welcome to Asuntoveikko!');
});

app.listen(port, function() {
	console.log('Gulp is running on PORT: ' + port);
});


