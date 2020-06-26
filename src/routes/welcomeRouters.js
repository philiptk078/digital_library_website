const express = require('express');
const welcomeRouter = express.Router();
function router(navWelcome,navSignOut){

    welcomeRouter.get('/',function(req,res){
        res.render("welcomeUser",{
            navWelcome,navSignOut,
            title: 'Welcome - Digital Library'
        });
    });
    return welcomeRouter;

}

module.exports = router;





