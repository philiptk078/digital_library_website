const express  = require ('express');
const booksRouter = express.Router();
const Bookdata = require('../model/bookData');

function router(navWelcome,navSignOut){
    
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

    booksRouter.get('/edit/:id',function(req,res){  
        const id= req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book)
        { 
         res.render("editBooks",{navWelcome,navSignOut,book,title:'Edit Books'});
        });
     });
 
     booksRouter.post("/update",function(req,res){
         var id = req.body.id;
         var title = req.body.title;
         var author = req.body.author;
         var genre = req.body.genre;
         var image=req.body.image;
         Bookdata.update({_id:id},{$set:{title:title,author:author,genre:genre,image:image}},function(err,res){
             if(err){
                
             }
         });
        res.redirect('/books');
     });
 
 
     booksRouter.get('/delete/:id',function(req,res){
         Bookdata.findByIdAndRemove(req.params.id,(err,doc)=> {
             if(!err){  
                 res.redirect('/books');
             }
         });
     });

    return booksRouter;
}

module.exports = router;