const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const port = process.env.PORT || 4001;
const index = require("./routes/index");
const app = express();

app.use(index);

const server = http.createServer(app);
module.exports.io = socketIo(server); // < Interesting!
require("./socket/socket");

server.listen(port, () => console.log(`Listening on port ${port}`));
