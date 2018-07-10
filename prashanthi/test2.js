var MongoClient = require('mongodb').MongoClient;
const mongodb_conn = 'mongodb://localhost:27017/';

express = require('express'),
    app = express();
app.use(express.static('public'));

var db = '';
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/home.html')
});

//app.get('/login', function (req, res) {
//        res.sendFile(__dirname+'/login.html')
//});


app.post('/data/:id', function (req, res) {
    var id = JSON.parse(req.params.id);
    db.collection('users').insert(id);
    res.end("Details updated");
});


app.post('/data1/:id', function (req, res) {
    var id = JSON.parse(req.params.id);
    console.log(id);
    db.collection('users').find(id).toArray(function (err, docs) {
        res.end(JSON.stringify(docs));
    });
});

app.post('/savedata/:id', function (req, res) {
    var id = JSON.parse(req.params.id);
    db.collection('jobs').insert(id);
    res.end("job updated");
});
app.post('/searchdata/:id', function (req, res) {
    var id = JSON.parse(req.params.id);
    console.log(id);
    db.collection('jobs').find().toArray(function (err, docs) {
        res.end(JSON.stringify(docs));
    });
});

app.post('/applydata/:id', function(req,res){
var id=JSON.parse(req.params.id);
db.collection('history').insert(id);
res.end("applied");
     });


     app.post('/flagdata/:id', function(req,res){
        var id=JSON.parse(req.params.id);
        db.collection('history').insert(id);
        res.end("applied");
});
app.post('/showdata/:id', function(req,res){
    var id={
        username:JSON.parse(req.params.id)
    };
    db.collection('history').find(id).toArray(function (err, docs) {
        res.end(JSON.stringify(docs));
    });
});
             
        
// app.post('', function(req,res){
//     var id=JSON.parse(req.params.id);
//     db.collection('jobs').find().toArray(function(err,docs){
//     res.end(JSON.stringify(docs));
//     });
// });


MongoClient.connect(mongodb_conn, function (err, client) {
    if (!err) {

        app.listen(1963, function () {
            db = client.db('jobs');
            console.log('connection successfull!!!');
        });

    }
});
