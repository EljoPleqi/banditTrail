const fs = require('fs');
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3007;

const server = express();
server.use(
  cors({
    origin: 'http://localhost:3000',
  })
);
const productData = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/product-data.json`)
);

server.get('/api', (req, res) => {
  res.json(productData);
});

server.listen(PORT, () => {
  console.log(`Server is live on ${PORT}`);
});
