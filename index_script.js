const ytsr = require("ytsr");
const src = await ytsr("Legendgaming 31")
const video = src.items.filter(i => i.type === 'channel')[0];
const tnmURL = video.bestThumbnail.url;
const sbrc = video.subscribers;

document.getElementById("ytlogo").src=tnmURL;