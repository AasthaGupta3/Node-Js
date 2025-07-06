
const http = require("http");
const testingSyntax = require('./syntax');
const server = http.createServer((request, response) => {
  console.log(request);
  testingSyntax();
});
const port = 3000;

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
