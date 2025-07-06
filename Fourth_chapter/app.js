
const http = require("http");
const server = http.createServer((request, response) => {
  console.log(request);
  
});
const port = 300;

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
