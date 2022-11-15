const express = require('express');
 const app = express();
 const mongoose = require('mongoose');
 const bodyParser = require('body-parser');

 app.use(bodyParser.urlencoded({extended: true}));

 mongoose.connect("***REMOVED***", { useNewUrlParser: true}, { useUnifiedTopology: true})

 //create data schema
 const dataSchema = {
     email: String,
     password: String
 } 

 const Data = mongoose.model("Data", dataSchema);

 app.get("/", function(req, res) {
     res.send("you shouldnt be here");
 })

 app.get("/insert", function(req, res){
     let newData = new Data({
         email: req.query.email,
         password: req.query.password
     });
     newData.save();
     res.send("success");
 });

 var port = process.env.PORT || 3000;
 app.listen(port, function() {
     console.log('Express started on port 3000');
 })