const express = require('express');
const signupRouter = express.Router();
function router(nav){

    signupRouter.get('/',function(req,res){
        res.render("signup",{
            nav,
            title: 'Sign Up - Digital Library',
            redirect:'/signin'
        });
    });
    return signupRouter;

}

module.exports = router;  