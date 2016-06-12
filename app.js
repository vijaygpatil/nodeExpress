var express = require('express');

var app = express();

var port = 5000;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function(request, response){
    response.send('Library Application');
});

app.listen(port, function(err){
    console.log('Running on port: '+port);
});