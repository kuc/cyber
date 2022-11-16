const express = require('express')
const mongoose = require('mongoose');
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');

mongoose.connect('MONGODB URL');

const dataSchema = {
    email: String,
    password: String
}

const Data = mongoose.model('Data', dataSchema);

app.get('/', (req, res) => {
    Data.find({}, function(err, datas){
        res.render('index', {
            dataList: datas
        })
    })
})

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('Express started on port 3000');
})