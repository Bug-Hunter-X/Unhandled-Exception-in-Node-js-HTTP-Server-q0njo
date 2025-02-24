const http = require('http');

const server = http.createServer((req, res) => {
  // Logic to handle the request
  res.end();
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

//Unhandled exception
//In this example the server will listen to port 3000 and will not respond to any request. if any error occurres during handling of the request the error will not be handled.  