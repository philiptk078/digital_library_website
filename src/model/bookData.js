//Accessing Mongoose package
const mongoose = require('mongoose');

//Database connection
mongoose.connect('mongodb://localhost:27017/digitalLibrary');
// ,{useUnifiedTopology:true, useNewUrlParser: true}

//Schema definition
const Schema = mongoose.Schema;


const bookSchema = new Schema({ 
    title: String,
    author: String,
    genre: String,
    image: String
});

//Model creation
var Bookdata = mongoose.model('bookData', bookSchema);

module.exports = Bookdata;