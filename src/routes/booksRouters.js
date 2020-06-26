const express  = require ('express');
const booksRouter = express.Router();
const Bookdata = require('../model/bookData');

function router(navWelcome,navSignOut){
    //Listing Books
    // var books = [
    //     {
    //         title: 'The Lord Of The Rings',
    //         author: 'J.R.R Tolkien',
    //         genre: 'Cartoon',
    //         img: 'book1.jpg'
    //     },
    //     {
    //         title: 'Harry Potter',
    //         author: 'J K Rowling',
    //         genre: 'Fantasy',
    //         img: 'book2.jpg'
    //     },
    //     {
    //         title: 'Wings Of Fire',
    //         author: 'Arun Tiwari',
    //         genre: 'Autobiography',
    //         img: 'book3.jpg'
    //     },
    //     {
    //         title: 'The Alchemist',
    //         author: 'Paulo Coelho',
    //         genre: 'Drama',
    //         img: 'book5.jpg'
    //     },
    //     {
    //         title: 'Romeo & Juliet',
    //         author: 'William Shakespeare',
    //         genre: 'Fantasy',
    //         img: 'book4.jpg'
    //     },
    //     {
    //         title: 'Five Children on the Western Front',
    //         author: 'Kate Saunders',
    //         genre: 'Drama',
    //         img: 'book6.jpg'
    //     },
    //     {
    //         title: 'The Light We Cannot See',
    //         author: 'Anthony Doerr',
    //         genre: 'Cartoon',
    //         img: 'book7.jpg'
    //     },
    //     {
    //         title: 'The Da Vinci Code',
    //         author: 'Dan Brown',
    //         genre: 'Autobiography',
    //         img: 'book8.jpg'
    //     },
    // ];

    booksRouter.get('/', function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books",{
                navWelcome,navSignOut,
                title:'Books',
                books
            });
        });
    });

    booksRouter.get('/:id', function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id: id})
        .then(function(book){
        res.render('book',{
            navWelcome,navSignOut,
            title:'Book page',
            book
            });
        });
    });
    return booksRouter;
}

module.exports = router;