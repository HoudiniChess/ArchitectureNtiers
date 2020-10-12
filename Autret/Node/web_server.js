var fs = require('fs')
var util = require('util')
​
var express = require('express');
var app = express();
var port = 9000;
​
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
​
app.use(express.static('static'));
// pour que node puisse fournir les fichiers contenus dans static
​
app.get('/test', function (req, res) {
    res.send({mess : "test"});
});
​
app.post('/test', function (req, res) {
    res.send({mess : "test"});
});
​
// lancement du serveur
​
var server = app.listen(port, function () {
    console.log('Express server listening on port ' + port);
});