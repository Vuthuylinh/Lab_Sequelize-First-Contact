const express = require("express");
const morgan = require('morgan');
// const bodyParser= require('body-parser'); new version of express has built-in body-parser
const path = require('path')
const app = express(); // create an express app
const layout = require("./views/layout");

app.use(morgan("dev")); //loging middleware
app.use(express.static(path.join(__dirname + "./public")));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get("/",(req,res)=>{
  res.send(layout("hello world!"));
})



module.exports = app;

