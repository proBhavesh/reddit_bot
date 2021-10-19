const snoowrap = require("snoowrap");
const fs = require("fs");
const axios = require("axios");
const fetch = require("node-fetch");
const r = new snoowrap({
	userAgent: process.env.REDDIT_USER_AGENT,
	clientId: process.env.REDDIT_CLIENT_ID,
	clientSecret: process.env.REDDIT_CLIENT_SECRET,
	refreshToken: process.env.REDDIT_REFRESH_TOKEN,
});

const a = () => {
	// return r.getBest().then(console.log);
	// return r.getTop("popular").then((res) => {
	// 	console.log(res[3]);
	// 	return res;
	// });
	return r.getTop("popular").then((res) =>
		console.log(
			`Title - ${res[6].title}, Subreddit - ${res[6].subreddit_name_prefixed}, Upvotes - ${res[6].ups},Type of post - ${res[6].post_hint}, content URL(image) - ${res[6].url_overridden_by_dest}, Over 18 - ${res[6].over_18}, Preview - ${res[6].preview.images[6]} , is_video - ${res[6].is_video}, reddit_video(video url) - ${res[6].media.reddit_video.fallback_url},
				`
		)
	);
};

const getTopPosts = async (subreddit) => {
	console.log("Processing");
	const posts = await r.getTop(subreddit);

	console.log(await posts[1]);
	return await posts;
};

const getTopImages = async (posts) => {
	console.log("Processing");
	return await posts;
};

const getTopVideos = async (posts) => {
	console.log("Processing");
	return await posts;
};

const URLtoImage = async (url) => {
	const response = await fetch(url);
	const buffer = await response.buffer();
	return fs.writeFile(`./image.jpg`, buffer, () =>
		console.log("finished downloading!")
	);
};

const URLtoVideo = async (url) => {
	const response = await fetch(url);
	const buffer = await response.buffer();
	return fs.writeFile(`./videos.mp4`, buffer, () =>
		console.log("finished downloading!")
	);
};

module.exports = { a, getTopImages, URLtoImage, URLtoVideo };
// URL Reddit - ${res[3].url},
