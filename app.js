var express = require('express');

var app = express();

var port = 5000;

app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response){
    response.render('index', {title: 'Hello from Render EJS', list: ['a', 'b']});
});

app.listen(port, function(err){
    console.log('Running on port: '+port);
});