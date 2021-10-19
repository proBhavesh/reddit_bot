const axios = require("axios");

const { TwitterClient } = require("twitter-api-client");

const twitterClient = new TwitterClient({
	apiKey: process.env.TWITTER_API_KEY,
	apiSecret: process.env.TWITTER_API_SECRET,
	accessToken: process.env.TWITTER_ACCESS_TOKEN,
	accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});


// const tweet = async (i) => {
// 	try {
// 		twitterClient.tweets.statusesUpdate({
// 			status: `SHe : ${jokes[i].setup} \nHe : ${jokes[i].punchline}`,
// 		});
// 	} catch (err) {
// 		return console.log("something went wrong");
// 	}
// 	console.log("This is tweet");
// };

module.exports = {
	tweet,
};
