const express = require('express');
const addauthorRouter = express.Router();
const Authordata = require('../model/authorData'); //Access Bookdata that exported from bookData.js

function router(navAddBook,navSignOut){
    addauthorRouter.get('/', function(req, res){
        res.render('addAuthor',{
            navAddBook,navSignOut,
            title: 'Add Author'
        });
    });
    
    addauthorRouter.post('/add', function(req,res){
       var item = {
            author: req.body.author,
            books: req.body.books, //access Query parameter here and sent it to booData.js for that we create an object with key/value pairs
            description: req.body.description,
            image: req.body.image
       };
       var book = Authordata(item); //Pass the item to bookData and after passing the structure and model it will return back and saved in book variable
       book.save();   // saving to database
       res.redirect('/authors'); // redirected to the books page

    });
    return addauthorRouter;
}
module.exports = router;
