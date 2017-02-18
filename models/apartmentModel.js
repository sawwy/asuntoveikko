var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
	
var apartmentModel = new Schema({
	address: {type: String},
	price: {type: Number},
	roomCount: {type: Number},
	size: {type: Number},
	loc: {
    type: [Number],  // [<longitude>, <latitude>]
    index: '2d'      // create the geospatial index
	}
});

module.exports = mongoose.model('Apartment', apartmentModel);
	
