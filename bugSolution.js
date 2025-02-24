const http = require('http');

const server = http.createServer((req, res) => {
  try {
    // Logic to handle the request
    //Simulate an error
    //const result = 10/0;
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
  } catch (error) {
    console.error('Error handling request:', error);
    res.writeHead(500, {'Content-Type': 'text/plain'});
    res.end('Internal Server Error');
  }
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});