var MongoClient = require('mongodb').MongoClient;
const mongodb_conn = 'mongodb://localhost:27017/';

var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var db = '';
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/authenticate', function (req, res) {
    //write logic to check with DB
    res.send({
        flg: 'success',
        msg: 'Login successsfull'
    });
});

app.get('/check_usr_status', function (req, res) {
    //write logic to check with DB
    res.send({ isLoggedIn: false });
});

app.listen(3000, function () {
    console.log('Server running @ localhost:3000');
});