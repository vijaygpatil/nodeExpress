var express = require('express');

var app = express();

var port = 5000;

app.get('/', function(request, response){
    response.send('Hello World');
});

app.listen(port, function(err){
    console.log('Running on port: '+port);
});