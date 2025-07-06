const fs = require('fs');

function requestHandler(req, res) {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>Welcome to My Site</title>
        </head>
        <body>
          <h1>Enter Your Details</h1>
          <form action="/submit-details" method="post">
          
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name" required><br><br>

            <label for="class">Class:</label><br>
            <input type="text" id="class" name="class" required><br><br>

            <label for="rollno">Roll No:</label><br>
            <input type="text" id="rollno" name="rollno" required><br><br>

            <input type="submit" value="Submit">
          </form>
        </body>
      </html>
    `);
    return res.end();
  }

  else if (req.url.toLowerCase() === '/submit-details' && req.method === "POST") {
    const body = [];

    req.on('data', chunk => {
      body.push(chunk);
    });

    req.on('end', () => {
      const fullBody = Buffer.concat(body).toString();
      const params = new URLSearchParams(fullBody);
      const bodyObject = Object.fromEntries(params);

      console.log(bodyObject);

      fs.writeFileSync('User.txt', JSON.stringify(bodyObject, null, 2));

      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    });

    return;
  }

  // Default 404 response
  res.setHeader("Content-Type", "text/html");
  res.write(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>404 - Not Found</title>
      </head>
      <body>
        <h1>404 - Page Not Found</h1>
      </body>
    </html>
  `);
  return res.end();
}

module.exports = requestHandler;
