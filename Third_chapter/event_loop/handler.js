const { sumRequestHandler } = require("./sum");

const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Home Page</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f0f8ff;
      text-align: center;
      padding-top: 100px;
    }
    h1 {
      color: #333;
    }
  </style>
</head>
<body>
  <h1>Welcome to Calculator</h1>
  <a href="/calculator">Go To Calculator</a>
</body>
</html>`);
    return res.end();
  }

  if (req.url.toLowerCase() === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculator Page</title>
</head>
<body>
  <h1>Welcome to My Calculator</h1>
  <form action="/calculate-result" method="POST">
    <input type="text" name="first" placeholder="First Number" />
    <input type="text" name="second" placeholder="Second Number" />
    <input type="submit" value="Sum" />
  </form>
</body>
</html>`);
    return res.end();
  }

  if (
    req.url.toLowerCase() === "/calculate-result" &&
    req.method === "POST"
  ) {
    return sumRequestHandler(req, res);
  }

  // 404 Page
  res.setHeader("Content-Type", "text/html");
  res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Doesn't Exist</title>
</head>
<body>
  <h1>404 Page Doesn't Exist</h1>
  <a href="/">Go To Home</a>
</body>
</html>`);
  res.end();
};

exports.requestHandler = requestHandler;
