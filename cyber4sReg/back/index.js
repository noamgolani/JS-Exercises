const http = require('http');

const port = 5000;

const server = http.createServer((req, res) => {
  res.writeHead(200, 'Good');
  res.end();
});

server.listen(5000, () => {
  console.log(`Listening on http://localhost:${port}`);
});
