const twitter_handle = "forevergreenly";

var Twit = require("twit");
var config = require("./config");

var T = new Twit(config);

console.log("the bot is starting...");


function sendTweet(message) {
	var tweet = {status: message};
	T.post("statuses/update", tweet, tweeted);

	function tweeted(error, data, response){
		if (error) { 
			console.log(error);
		}
		// console.log(data);
		console.log("tweeted", message);
	}

}
// send one tweet when app boots up
// sendTweet("🤽🏻‍♀️");

// once every 24 hours
// setInterval(function(){}, 1000 * 60 * 60 * 24)

function randInt(max) {
	return Math.floor( Math.random() * max)
}

function gardenTweet() {
	var chars = ["🐰","🐛","🐛","🌺","🌱","🌿","🌿","🌱","🌳","🌳","🌳","🌳","🦚","🦚","🦚","🦜","🦜","🍃","🌾","🌾"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "]
	var garden = ""
	for(var i = 0; i < 28; i +=1){
		garden= garden + chars[randInt(chars.length)];
	}
	
	sendTweet(garden);
}

// once every 10 min
setInterval(gardenTweet, 1000 * 60 * 10);

gardenTweet();

//QUIT TERMINAL WITH ^C (CTRL+C)
