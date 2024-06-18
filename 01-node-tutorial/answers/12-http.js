const http  = require('http');

const server = http.createServer((req, res)=> {
  res.write("Welcome to my first node web server");
  res.end();
});

server.listen(3000);