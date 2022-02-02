const express = require('express');
const cors = require('cors');
const db = require('./models');
const productRouter = require('./routes/productsRoutes');
const productDetailsRouter = require('./routes/productDetailsRoutes');

const PORT = process.env.PORT || 3007;

const server = express();

// allows to use json in express
server.use(express.json());
server.use(
  cors({
    origin: 'http://localhost:3000',
  })
);
//ROUTERS
server.use('/api/products', productRouter);
server.use('/api/products', productDetailsRouter);

// connects server with DB and starts the server

db.sequelize.sync().then(() => {
  server.listen(PORT, () => {
    console.log(`Server is live on ${PORT}`);
  });
});
