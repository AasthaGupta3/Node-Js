const sumRequestHandler = (req, res) => {
  console.log("In Sum Request Handler", req.url);
  console.log("1. Sum request handler started");
  

  const body = [];
  let result ;
  req.on('data', chunk => {
    body.push(chunk);
    console.log("2. Received chunk");
    
  });

  req.on('end', () => {
    console.log("3. Request ended, processing data");
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);
    
     result = Number(bodyObj.first) + Number(bodyObj.second);
    });
  console.log("4. Response Sent");
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
 
};

exports.sumRequestHandler = sumRequestHandler;
