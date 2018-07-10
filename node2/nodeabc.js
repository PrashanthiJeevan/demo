express = require('express'),
    app = express();
app.use(express.static('public'));
app.get('/a', function (req, res) {
    res.end("<h1>Hi Prashanthi</h1>");
});

app.get('/b', function (req, res) {
    res.sendFile(__dirname+'/app.html')
});


app.post('/abc/:something', function (req, res) {
    var some = req.params.something;
    res.end(some);
});

app.listen(3000, function () {
    console.log('connected successfully!!!');
});