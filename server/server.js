//import of NPM packages

const express = require("express");
require('dotenv').config();
const app = express();
const mongoose = require("mongoose");

// MiddleWare
app.use((req,res,next) =>{
    console.log("path  " + req.path + "Method   " + req.method + "  " + res.method);
    next();
});

//Methods GET,POST,PATCH,DELETE

app.get("/",(req,res)=>{
    res.send("Hel world");
});

//DB Connection

mongoose.connect(process.env.MONGO_URI)
//we establish that db connection , where it will enable the db connected then it will show the PORT
   .then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("DB Connected Succesfully & Listening to port " + process.env.PORT);
    });
    
   }).catch((error) =>{
    console.log(error);
   });
