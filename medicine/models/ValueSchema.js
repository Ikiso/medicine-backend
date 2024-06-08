const mongoose = require('mongoose');

const schema = new mongoose.Schema({
	value: String,
	disease: {type: 'ObjectId', ref: 'Disease'},
	year: {type: 'ObjectId', ref: 'Year'},
	area: {type: 'ObjectId', ref: 'Area'},
	age: {type: 'ObjectId', ref: 'Age'},
	type: {type: 'ObjectId', ref: 'Type'},
});

module.exports = mongoose.model('Value', schema);