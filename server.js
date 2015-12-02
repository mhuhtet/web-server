var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var middleware = require('./middleware.js');


app.use(middleware.logger);

//app.use(middleware.requireAuthentication)

app.get('/about', middleware.requireAuthentication, function(req, res) {
    res.send('Hello Express, This Is About Page!!');
});


app.use(express.static(__dirname + '/public'));


app.listen(PORT, function(){
    console.log('Express Server Started at PORT ' + PORT + '!' )
});

    