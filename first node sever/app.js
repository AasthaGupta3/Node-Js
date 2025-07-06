const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Success</title>
      </head>
      <body>
        <h1> this is home page</h1>
      </body>
      </html>`);

    res.end();
    return;
    
  } else if (req.url === "/cake") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Cake Preparation</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #fff8f0;
            color: #333;
            padding: 20px;
            max-width: 700px;
            margin: auto;
          }
          h1 {
            text-align: center;
            color: #d2691e;
          }
          h2 {
            color: #8b4513;
          }
          ul {
            list-style-type: square;
          }
          .step {
            margin-bottom: 15px;
          }
        </style>
      </head>
      <body>
    
        <h1>🎂 Cake Preparation Guide</h1>
    
        <h2>Ingredients:</h2>
        <ul>
          <li>1 and 1/2 cups of all-purpose flour</li>
          <li>1 cup of sugar</li>
          <li>1/2 cup of butter</li>
          <li>2 eggs</li>
          <li>1/2 cup of milk</li>
          <li>1 tsp of vanilla extract</li>
          <li>1 and 1/2 tsp of baking powder</li>
          <li>Pinch of salt</li>
        </ul>
    
        <h2>Steps to Prepare:</h2>
        <div class="step"><strong>Step 1:</strong> Preheat the oven to 180°C (350°F).</div>
        <div class="step"><strong>Step 2:</strong> In a bowl, cream together the butter and sugar until light and fluffy.</div>
        <div class="step"><strong>Step 3:</strong> Beat in the eggs one at a time, then add vanilla extract.</div>
        <div class="step"><strong>Step 4:</strong> In another bowl, mix flour, baking powder, and salt.</div>
        <div class="step"><strong>Step 5:</strong> Gradually add the dry ingredients to the wet mixture, alternating with milk.</div>
        <div class="step"><strong>Step 6:</strong> Pour the batter into a greased cake tin.</div>
        <div class="step"><strong>Step 7:</strong> Bake for 30–35 minutes or until a toothpick comes out clean.</div>
        <div class="step"><strong>Step 8:</strong> Let the cake cool before serving. Enjoy!</div>
    
      </body>
      </html>`);

    res.end();
    return;
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write(`<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Success</title>
      </head>
      <body>
        <h1>I did it!</h1>
      </body>
      </html>`);

    res.end();
    return;
  }
});

const Port = 3000;
server.listen(Port, () => {
  console.log(`Server is running at http://localhost:${Port}`);
});
