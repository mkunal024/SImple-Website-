const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const router= require('./router/router');
const path = require("path");
const ejsMate=require("ejs-mate");
var favicon = require('serve-favicon');


app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyparser.json());

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