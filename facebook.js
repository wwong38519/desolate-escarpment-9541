// http://udidu.blogspot.hk/2012/11/facebook-api-with-nodejs.html
var https = require('https');

var facebook = {
	configs: {
		version: '/v2.5',
		app_id: '',
		app_secret: '',
		access_token: ''
	},
	setup: function(id, secret) {
		var self = this;
		self.configs.app_id = id;
		self.configs.app_secret = secret;
		self.login();
	},
	login: function(callback) {
		var self = this;
		var path = '/oauth/access_token?client_id='+self.configs.app_id+'&client_secret='+self.configs.app_secret+'&grant_type=client_credentials';
		self.get(path, function(data) {
			self.configs.access_token = data;
			if (callback != null) callback('success');
		});
	},
	api: function(path, callback) {
		var self = this;
		path = self.configs.version + path + (path.indexOf('?') > 0 ? '&' : '?') + self.configs.access_token;
		self.get(path, function(data) {
			if (callback != null) callback(data);
		});
	},
	get: function(path, callback) {
		var options = {
			host: 'graph.facebook.com',
			port: 443,
			path: path,
			method: 'GET'
		};
		var request = https.get(options, function(result) {
			var buffer = '';
			result.setEncoding('utf8');
			result.on('data', function(chunk){
				buffer += chunk;
			});
			result.on('end', function() {
				if (callback != null) callback(buffer);
			});
		});
		request.on('error', function(e){
			console.log('error from facebook.get(): '+ e.message);
		});
		request.end();
	}
}

module.exports = facebook
