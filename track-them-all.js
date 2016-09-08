var http = require('http');
var fs = require('fs');
var Twitter = require('twitter');
var json = require('./config.json');
var search_val = json['hashtag'];

var client = new Twitter({
  consumer_key: 'CPJD4e4ubYjBxu60pHsyXEqz3',
  consumer_secret: 'yXXccCgV094IavaMK85mKlHkCdndRzW1QCUxcasnIAoF8QhGXQ',
  access_token_key: '1272891920-IM1FA9UhcRfAIOBJMlgD8GqgAy4kFB0rOPUqqri',
  access_token_secret: 'LmMMkzPMhoNBELA9ALuZAj2qAxnqDmz8vAddHrzxEL4lR'
});

var server = http.createServer(function(req, res) {
    fs.readFile('./tta.html', 'utf-8', function(error, content) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    });
});

console.log("Enter on any browser: localhost:8080");
console.log("Press CTRL + C to leave");

var io = require('socket.io').listen(server);

	io.sockets.on('connection', function (socket) {
		console.log("Wait Tweet");
		client.stream('statuses/filter', { track: search_val },
		function(stream) {
			stream.on('data', function( tweet ) {
				var tweet_id = tweet.id_str;
				var tweet_text = tweet.text;
				var tweet_img_profile = tweet['user'].profile_image_url_https;
				var tweet_name = tweet['user'].name;
				var tweet_screen_name = tweet['user'].screen_name;

				console.log(tweet);
				console.log("Tweet USER NAME : " + tweet_name);
				console.log("Tweet @name : " + tweet_screen_name);
				console.log("Tweet URL IMG : " + tweet_img_profile);
				console.log("Tweet ID : "+ tweet_id);
				console.log("Tweet Text : " + tweet_text);
				console.log("Wait Next Tweet");
				console.log("-----------------------------");
				io.emit('get_info', tweet_text, tweet_img_profile, tweet_name, tweet_screen_name);
			});
 
        stream.on('error', function ( error ) {
            console.error(error);
        });
		});
		socket.emit('get_search_value', search_val)
	});
	
//http://localhost:8080/
server.listen(8080);