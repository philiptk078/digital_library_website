//Accessing Mongoose package
const mongoose = require('mongoose');

//Database connection
mongoose.connect('mongodb://localhost:27017/digitalLibrary');

//Schema definition
const Schema = mongoose.Schema;


const authorSchema = new Schema({ 
    author: String,
    title: String,
    genre: String,
    image: String
});

//Model creation
var Authordata = mongoose.model('authorData', authorSchema);

module.exports = Authordata;