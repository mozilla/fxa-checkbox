var httpServer = require('http-server');
var opn = require('opn');
var path = require('path');

var server = httpServer.createServer({
  root: path.join(__dirname, '..')
});

server.listen(10142);
opn('http://127.0.0.1:10142/test/index.html');
