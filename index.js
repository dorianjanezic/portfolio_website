//Initialize the express 'app' object
let express = require('express');
let app = express();
app.use('/', express.static('public'));

//Initialize the actual HTTP server
let http = require('http');
let server = http.createServer(app);
let port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log("Server listening at port: " + port);
});

let io = require('socket.io')(server);
let about = io.of('/about');
let home = io.of('/home');