const http = require('http');
const port = process.env.PORT || 80;
const host = process.env.HOSTNAME || 'localhost';

//create a server object:
http.createServer(function (req, res) {
  res.setHeader('content-type', 'text/html')
  res.write('<h1>Hello World!</h1>') //write a response
  res.end(); //end the response
}).listen(port, undefined, function() { console.log(`Running in http://${host}:${port}`) }); //the server object listens on port 8080
