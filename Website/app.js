const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const router= require('./router/router');
const path = require("path");
const ejsMate=require("ejs-mate");
var favicon = require('serve-favicon')
const session = require('express-session');


app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
}));

app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyparser.json());
app.use(favicon(path.join(__dirname, 'images', 'favicon.ico')))
app.use(express.static('public'));

app.engine('ejs',ejsMate);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use("/",router)
app.get("/", (req, res) => {
    res.render('home'); 
});

app.get("/about",(res,resp) => {
     resp.render('about');
})


app.listen(3002,function(){
    console.log("server is running at port 3002")
})

module.exports=app;
