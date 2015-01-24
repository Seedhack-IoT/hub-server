var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: false}));
    app.get('/', function (req, res) {
        console.log(req.body);
        res.send('Hello world!');
    });

    app.post('/', function(req, res){
        console.log(req.body.data);
        console.log("---------------------------------------------");
        res.send('hello world!');
    });

var server = app.listen(1337, function () {

      var host = server.address().address
      var port = server.address().port

      console.log('Example app listening at http://%s:%s', host, port)

});

