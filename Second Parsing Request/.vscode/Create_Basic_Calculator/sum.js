const sumRequestHandler = (req, res) => {
  console.log("In Sum Request Handler", req.url);

  const body = [];

  req.on('data', chunk => {
    body.push(chunk);
  });

  req.on('end', () => {
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);
    
    const result = Number(bodyObj.first) + Number(bodyObj.second);

    res.setHeader("Content-Type", "text/html");
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculation Result</title>
</head>
<body>
  <h1>Your Sum is ${result}</h1>
  <a href="/">Back to Home</a>
</body>
</html>`);
    res.end();
  });
};

exports.sumRequestHandler = sumRequestHandler;
