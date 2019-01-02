const express = require("express");
const app = express();
const bodyParser= require('body-parser');
const port = process.env.PORT || 1222;
const mongoose = require("mongoose");
const db=require("./dbConnect");
const Users = require("./models/user");
// const bcrypt = require("bcrypt");
// const saltRounds = 10;
// const Users=require("./models/userz");
app.use(express.static(__dirname + '/'));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get("/",function(req,res,next){
    res.sendFile(__dirname + '/');
});
app.post("/",function(req,res,next){
    var user= new Users(req.body);
    // user.email= req.body.email;
    // user.password= req.body.password;

    // bcrypt.genSalt(saltRounds, function(err, salt) {
    //     bcrypt.hash(req.body.password, salt, function(err, hash) {
    //         user.email=req.body.email;
    //         user.password=hash;

    user.save(function(err){
        if(err){
            throw err;
        }
        else{
            res.send("Data send to database");
        }
    });
// });

    // });
});
app.listen(port,function(err){
    if(err){
        throw err;
    }
    else{
        console.log("Server connected at port :"+port);
    }
});