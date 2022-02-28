const express = require('express');

require('dotenv').config({ path: './config.env' });

const cors = require('cors');
const db = require('./models');
const path = require('path');

const server = express();

// allows to use json in express
server.use(express.json());

const PORT = process.env.PORT || 8000;

server.use(
  cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
    credentials: true,
  })
);

//serve static files

if (process.env.NODE_ENV === 'production') {
  server.use('/', express.static(path.join(__dirname, './client/build')));
  server.use('/public', express.static(path.join(__dirname, 'public')));
}

server.use('/public', express.static(path.join(__dirname, 'public')));
// ROUTERS
const productRouter = require('./routes/productsRoutes');
const trailsRouter = require('./routes/trailsRouter');
const usersRouter = require('./routes/userRouter');

//ROUTERS
server.use('/users', usersRouter);
server.use('/api/products', productRouter);
server.use('api/trail', trailsRouter);

// connects server with DB and starts the server

db.sequelize.sync().then(() => {
  server.listen(PORT, () => {
    console.log(`Server is live on ${PORT}`);
  });
});
