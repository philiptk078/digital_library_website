const express  = require ('express');
const authorsRouter = express.Router();
const Authordata = require('../model/authorData'); 

function router(navWelcome,navSignOut){

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

    authorsRouter.get('/edit/:id',function(req,res){  
        const id = req.params.id;
        Authordata.findOne({_id:id})
        .then(function(author)
        { 
         res.render("editAuthors",{navWelcome,navSignOut,author,title:'Edit Authors'});
        });
     });
 
     authorsRouter.post("/update",function(req,res){
         var id = req.body.id;
         var author = req.body.author;
         var books = req.body.books;
         var description = req.body.description;
         var image=req.body.image;
         Authordata.update({_id:id},{$set:{author:author,books:books,description:description,image:image}},function(err,res){
             if(err){
                
             }
         });
        res.redirect('/authors');
     });
 
 
     authorsRouter.get('/delete/:id',function(req,res){
        Authordata.findByIdAndRemove(req.params.id,(err,doc)=> {
             if(!err){  
                 res.redirect('/authors');
             }
         });
     });
 
    return authorsRouter;
}

module.exports = router;