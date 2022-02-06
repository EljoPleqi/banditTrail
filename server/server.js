const express = require('express');
const cors = require('cors');
const db = require('./models');
const path = require('path');
const productRouter = require('./routes/productsRoutes');
const productDetailsRouter = require('./routes/productDetailsRoutes');
const trailsRouter = require('./routes/trailsRouter');
const usersRouter = require('./routes/userRouter');

const PORT = process.env.PORT || 3007;

const server = express();

// allows to use json in express
server.use(express.json());
server.use(
  cors({
    origin: 'http://127.0.0.1:3000',
  })
);

//serve static files

server.use('/public', express.static(path.join(__dirname, 'public')));

//ROUTERS
server.use('/api/products', productRouter);
server.use('/api/product-details', productDetailsRouter);
server.use('api/trail', trailsRouter);
server.use('/api/users', usersRouter);

// connects server with DB and starts the server

db.sequelize.sync().then(() => {
  server.listen(PORT, () => {
    console.log(`Server is live on ${PORT}`);
  });
});
