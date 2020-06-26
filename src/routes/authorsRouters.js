const express  = require ('express');
const authorsRouter = express.Router();
const Authordata = require('../model/authorData'); 

function router(navWelcome,navSignOut){
    //Listing authors
    // var authors = [
    //     {
    //         author: 'J.R.R Tolkien',
    //         title: 'The Lord Of The Rings',
    //         genre: 'Cartoon',
    //         img: 'author2.png'
    //     },
    //     {
    //         author: 'J K Rowling',
    //         title: 'Harry Potter',
    //         genre: 'Fantasy',
    //         img: 'author1.png'
    //     },
    //     {
    //         author: 'Arun Tiwari',
    //         title: 'Wings Of Fire',
    //         genre: 'Autobiography',
    //         img: 'author3.png'
    //     },
    //     {
    //         author: 'Paulo Coelho',
    //         title: 'The Alchemist',
    //         genre: 'Drama',
    //         img: 'author4.png'
    //     },
    //     {
    //         author: 'J K Rowling',
    //         title: 'Harry Potter',
    //         genre: 'Fantasy',
    //         img: 'author1.png'
    //     },
    //     {
    //         author: 'Paulo Coelho',
    //         title: 'The Alchemist',
    //         genre: 'Drama',
    //         img: 'author4.png'
    //     },
    //     {
    //         author: 'J.R.R Tolkien',
    //         title: 'The Lord Of The Rings',
    //         genre: 'Cartoon',
    //         img: 'author2.png'
    //     },
    //     {
    //         author: 'Arun Tiwari',
    //         title: 'Wings Of Fire',
    //         genre: 'Autobiography',
    //         img: 'author3.png'
    //     },
        
    // ];


    authorsRouter.get('/', function(req,res){
        Authordata.find()
        .then(function(authors){
        res.render("authors",{
            navWelcome,navSignOut,
            title:'Authors',
            authors
            });
        });
    });

    authorsRouter.get('/:id', function(req,res){
        const id = req.params.id;
        Authordata.findOne({_id: id})
        .then(function(author){
        res.render('author',{
            navWelcome,navSignOut,
            title:'Author page',
            author
            });
        });
    });
    return authorsRouter;
}

module.exports = router;