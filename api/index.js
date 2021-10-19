// const { tweet } = require("./ApiCall.js");
const fs = require("fs");
const {
	a,
	getTopImages,
	URLtoImage,
	URLtoVideo,
} = require("./reddit_script.js");

videoUrl = "https://v.redd.it/ccxdvu3omyt71/DASH_480.mp4?source=fallback";
URLtoVideo(videoUrl);
a();

// URLtoImage("https://i.redd.it/afquf45lgyt71.jpg");
// https://i.redd.it/afquf45lgyt71.jpg
// getTopImages("nextfuckinglevel");
// .then((a) => {
// fs.writeFileSync(__dirname + "\\data.js", JSON.stringify(a));
// });
