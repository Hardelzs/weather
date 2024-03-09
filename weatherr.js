const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const userInput = req.query.userInput; // Sanitize and validate userInput

  // Logic to construct HTML content based on sanitized userInput
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <body>
      <div id="user-output">
        <h1>${userInput}</h1> </div>
      </body>
    </html>
  `;

  res.send(htmlContent);
});

app.listen(3000, () => console.log('Server listening on port 3000'));
