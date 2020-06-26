
const express = require('express');
const editbooksRouter = express.Router();
const Bookdata = require('../model/bookData'); //Access Bookdata that exported from bookData.js

function router(navAddBook,navSignOut){
    editbooksRouter.get('/', function(req, res){
        res.render('editBooks',{
            navAddBook,navSignOut,
            title: 'Update Book'
        });
    });


    editbooksRouter.post("/edit", function (req, res) {
        Bookdata.findById(req.body.id, (err, data) => {
            if (err) {
                throw err;
            }
            else {
                res.render("editBooks", { nav, title: "update", data });
            }
        });
    });

    editbooksRouter.post("/update", function (req, res) {
        Bookdata.findByIdAndUpdate(req.body.id, { $set: req.body }, (err, data) => {
            if (err) {
                res.json({ "status": "Failed" });
            }
            else if (data.n == 0) {
                console.log(data);
                res.json({ "status": "No matches Found" });
            }
            else {
                Bookdata.find().then(function (data) {
                    res.redirect("/books");
                    
                });
            }
        });
    });

    editbooksRouter.post("/delete", function (req, res) {
        const id = req.body.id;
        Bookdata.findByIdAndDelete({ _id: id }).then(function () {
            res.redirect("/books");
        });
    });

    return editbooksRouter;
}
module.exports = router;
