const express = require('express');
const signupRouter = express.Router();
const SignupData = require('../model/signupData');

function router(nav){

    signupRouter.get('/',function(req,res){
        res.render("signup",{
            nav,
            title: 'Sign Up - Digital Library'
        });
    });

    signupRouter.post('/register',function(req,res){
        var item = {
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            email_addr:req.body.email_addr,
            password_first:req.body.password_first
        };
    
        var registration = SignupData(item);
        registration.save();
        res.redirect("/signin");
    
    });
    
    return signupRouter;


}

module.exports = router;  