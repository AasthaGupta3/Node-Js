const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log('came in first middleware', req.method, req.url);
  next(); // Only logging, then moving to next middleware
});

app.use((req, res, next) => {
  console.log('came in second middleware', req.method, req.url);
  res.send(`<h1>Hello from Express!</h1>`);
});

const port = 3003;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
