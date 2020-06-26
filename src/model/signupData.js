// //Accessing mongoose package
const mongoose = require('mongoose');

//DB connection
mongoose.connect('mongodb://localhost:27017/digitalLibrary');

//Schema definition
const schema = mongoose.Schema;

const signupSchema = new schema({
    first_name:String,
    last_name:String,
    email_addr:String,
    password_first:String
});

//Model creation
var SignupData = mongoose.model('signupData',signupSchema);

module.exports = SignupData;