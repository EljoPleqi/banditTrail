const express = require('express');
const morgan = require('morgan');

const bodyParser = require('body-parser');
const session = require('express-session');
const store = new session.MemoryStore();

require('dotenv').config({ path: './config.env' });

const cors = require('cors');
const db = require('./models');
const path = require('path');

// ROUTERS
const productRouter = require('./routes/productsRoutes');
const trailsRouter = require('./routes/trailsRouter');
const usersRouter = require('./routes/userRouter');

const server = express();

// allows to use json in express
server.use(express.json());

if (process.env.NODE_ENV === 'development') {
  server.use(morgan('dev'));
}

const PORT = process.env.PORT || 8000;

server.use(
  cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
    credentials: true,
  })
);

server.use(bodyParser.urlencoded({ extended: true }));

server.use(
  session({
    key: 'user',
    secret: process.env.ACCESS_TOKEN_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 2160000, secure: false },
    store,
  })
);

//serve static files

server.use('/public', express.static(path.join(__dirname, 'public')));

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
