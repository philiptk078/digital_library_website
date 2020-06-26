const express  = require ('express');
const app = express();

// nav links
const nav = [
    {link:'/signin', name:'Sign In'},
    {link:'/signup', name:'Sign Up'}
];
const navWelcome = [
    {link:'/welcomeUser', name:'Digital Library'},
    {link:'/books', name:'Books'},
    {link:'/authors', name:'Autours'}
];
const navAdmin = [
    {link:'/adminlogin', name:'Admin'}
];
const navAddBook = [
    {link:'/adminlogin', name:'Admin'}, 
    {link:'/addBook', name:'Add Book'},  
    {link:'/addAuthor', name:'Add Author'} 
];
const navEdit = [
    {link:'/adminlogin', name:'Admin'}, 
    {link:'/editBooks', name:'Edit Book'},  
    {link:'/editAuthors', name:'Edit Author'} 
];
const navSignOut = [
    {link:'/', name:'Log Out'}, 
];

// User section
const signinRouter = require('./src/routes/signinRouters')(nav);
const signupRouter = require('./src/routes/signupRouters')(nav);
const welcomeRouter = require('./src/routes/welcomeRouters')(navWelcome,navSignOut);
const booksRouter = require('./src/routes/booksRouters')(navWelcome,navSignOut);
const authorsRouter = require('./src/routes/authorsRouters')(navWelcome,navSignOut);
// Admin section
const adminloginRouter = require('./src/routes/adminloginRouters')(navAdmin);
const addbookRouter = require('./src/routes/addbookRouters')(navAddBook,navSignOut);
const addauthorRouter = require('./src/routes/addauthorRouters')(navAddBook,navSignOut);
const editbooksRouter = require('./src/routes/editBooksRouters')(navAddBook,navSignOut);

// view engine
app.set('view engine','ejs');
app.set('views','./src/views');
app.use(express.urlencoded({extended:true})); //we teach the server we want use post request with help of middleware
app.use(express.static(__dirname + '/public'));

// User section
app.use('/signin',signinRouter);
app.use('/signup',signupRouter);
app.use('/welcomeUser',welcomeRouter);
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
// Admin section
app.use('/adminlogin',adminloginRouter);
app.use('/addBook',addbookRouter);
app.use('/addAuthor',addauthorRouter);
app.use('/editBooks',editbooksRouter);


// home page router
app.get('/', function(req,res){
    res.render("index",
    {   
        nav, navAdmin,
        title:'Digital Library'
    });
});

app.listen(7001);
console.log("Router is ready");