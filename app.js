var express = require('express'),
	bodyParser = require('body-parser');

var models = require('./models/index');

var app = express();

var port = process.env.PORT || 3000;

var apartmentRouter = express.Router();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

apartmentRouter.route('/Apartments')
	.post(function(req, res) {
		models.Apartment.create(req.body).then(function(apartment) {
            console.log(apartment);
            res.status(201).json(apartment);
        });
	})
	.get(function(req, res) {
	    models.Apartment.findAll({}).then(function(apartments) {
            res.json(apartments);
		});
	});

apartmentRouter.route('/Apartments/:apartmentId')
	.get(function(req, res) {
        models.Apartment.find({
            where: {
                id: req.params.apartmentId
            }
        }).then(function(apartment) {
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


