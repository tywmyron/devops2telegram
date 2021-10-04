const express = require("express");
const videos = require("./videos");
var PORT = 8000;

var server = express();
server.use(express.json());

server.use(videos.router);

server.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});