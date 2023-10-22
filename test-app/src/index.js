const http = require('http');

const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('Hello World!');
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server listening on ${hostname}:${port}`);
});
