const express = require('express');
const adminloginRouter = express.Router();
function router(navAdmin){

    adminloginRouter.get('/',function(req,res){
        res.render("adminlogin",{
            navAdmin,
            title: 'Admin Log In - Digital Library',
            redirect:'/addBook'
        });
        
    });
    return adminloginRouter;

}

module.exports = router;

