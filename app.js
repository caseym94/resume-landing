var express = require('express'),
    app = express();

app.get('/', function (req, res) {
    res.send('yo');
});

app.listen('http://localhost:3000/');