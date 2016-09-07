var http = require('http');
var fs = require('fs');
var Twitter = require('twitter');

//Dev twitter Key
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

client.stream('statuses/filter', { track: '#TPMP' },
	function(stream) {
		stream.on('data', function( tweet ) {
            var tweet_id = tweet.id_str;
            var tweet_text = tweet.text;
			var tweet_img_profile = tweet['user'].profile_image_url_https;
			var tweet_name = tweet['user'].name;
			var tweet_screen_name = tweet['user'].screen_name;
			//If you want original IMG and Name of the tweet
			/*if(tweet['retweeted_status'])
			{
				tweet_img_profile = tweet['retweeted_status']['user'].profile_image_url_https;
				tweet_name = tweet['retweeted_status']['user'].name;
			}*/
			//Debug 
			console.log(tweet);
			console.log("Tweet USER NAME : " + tweet_name);
			console.log("Tweet @name : " + tweet_screen_name);
			console.log("Tweet URL IMG : " + tweet_img_profile);
			console.log("Tweet ID : "+ tweet_id);
            console.log("Tweet Text : " + tweet_text);
			console.log("-----------------------------");
        });
 
        stream.on('error', function ( error ) {
            console.error(error);
        });
 
    });
	

//http://localhost:8080/
server.listen(8080);