var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.get('/', function(req, res){
	res.redirect('/index.html');
});

var server = app.listen(process.env.PORT || 80);
