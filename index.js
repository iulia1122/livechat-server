var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser')

app.use(bodyParser.json())

// Add headers
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/', function (req, res) {
  res.send('<h1>Hello world</h1>');
});

app.post('/message', function (req, res) {
  var message = req.body.message;
  var username = req.body.username;
  console.log(message);
  io.emit("customEmit", { username: username, message: message });
});

http.listen(3000, function () {
  console.log('listening on *:3000');
});

io.on('connection', function (socket) {
  console.log('a user connected');
  socket.on('disconnect', function () {
    console.log('user disconnected');
  });
});

