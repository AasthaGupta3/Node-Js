const http = require("http");
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

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
    fs.writeFileSync('User.txt', ' Aastha Gupta');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end(); // ← this was missing
  }

  // Removed invalid `(req.url === " ")` line
  res.setHeader("Content-Type", "text/html");
  res.write(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Success</title>
      </head>
      <body>
        <h1>Form Submitted Successfully!</h1>
        <p>Thank you for submitting your details.</p>
      </body>
    </html>
  `);
  return res.end(); // ← this was incorrectly placed outside the server callback

});

const Port = 3001;
server.listen(Port, () => {
  console.log(`Server is running at http://localhost:${Port}`);
});
