var express = require('express');
var facebook = require('./facebook');
var app = express();
var app_id = process.env.FB_APP_ID || 'FB_APP_ID';
var app_secret = process.env.FB_APP_SECRET || 'FB_APP_SECRET';

facebook.setup(app_id, app_secret);

app.use(express.static(__dirname));

app.get('/', function(req, res){
	res.redirect('/index.html');
});

app.get('/login', function(req, res) {
	facebook.login(function(data){
		res.json('success');
	});
});

app.get('/api', function(req, res) {
	var path = req.query.path;
	facebook.api(path, function(data) {
		res.json(data);
	});
});

var server = app.listen(process.env.PORT || 80);
