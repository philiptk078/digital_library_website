const express = require('express');
const addbookRouter = express.Router();
const Bookdata = require('../model/bookData'); //Access Bookdata that exported from bookData.js

function router(navAddBook,navSignOut){
    addbookRouter.get('/', function(req, res){
        res.render('addBook',{
            navAddBook,navSignOut,
            title: 'Add Book'
        });
    });
    
    addbookRouter.post('/add', function(req,res){
       var item = {
            title: req.body.title, //access Query parameter here and sent it to booData.js for that we create an object with key/value pairs
            author: req.body.author,
            genre: req.body.genre,
            image: req.body.image
       };
       var book = Bookdata(item); //Pass the item to bookData and after passing the structure and model it will return back and saved in book variable
       book.save();   // saving to database
       res.redirect('/books'); // redirected to the books page

    });
    return addbookRouter;
}
module.exports = router;
