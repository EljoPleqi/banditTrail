const multer = require('multer');
const path = require('path');
const { Users } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: './config.env' });

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

// GET ALL PROUCT ENTRIES FROM THE DB

exports.getAllUsers =
  ('/',
  async (req, res) => {
    const allUsers = await Users.findAll();
    res.json(allUsers);
  });

// GET A UNIQUE PROUCT ENTRY FROM THE DB

exports.getSingleUser =
  ('/:username',
  async (req, res) => {
    const id = req.params.id;
    const user = await Users.findByPk(id);
    res.json(user);
  });

//  CREATE A NEW USER ENTRY IN THE DB
exports.createUser =
  ('/',
  async (req, res) => {
    try {
      // Get Profile Picture

      // Get User data
      const {
        username,
        password,
        userEmail,
        userPhone,
        userDescription,
        userRidingStyle,
      } = req.body;

      // create user with hashed password
      bcrypt.hash(password, 10).then((hash) =>
        Users.create({
          avatar: req.file.path,
          username: username,
          password: hash,
          userEmail: userEmail,
          userPhone: userPhone,
          userDescription: userDescription,
          userRidingStyle: userRidingStyle,
        })
      );

      res.json('JOB DONE');
    } catch (error) {
      console.log(error);
      res.status(500);
    }
  });

exports.login =
  ('/login',
  async (req, res) => {
    try {
      // Get User data
      const { username, password } = req.body;
      const user = await Users.findOne({ where: { username: username } });

      // check is user exists
      if (!user) res.json({ error: 'Rider does not exist' });

      // check if password is correct
      bcrypt.compare(password, user.password).then(async (match) => {
        if (!match) res.json({ error: 'Wrong password' });

        // Create authentication token
        const accessToken = jwt.sign(
          { username: user.username, id: user.id },
          ACCESS_TOKEN_SECRET
        );
        res.json(accessToken);
      });
      // return acess token
    } catch (error) {
      console.log(error);
      res.status(500);
    }
  });

// UPLOAD PRODUCT IMG

//  1) Store image on the computers disk
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/img/user-avatars');
  },
  filename: (req, file, cb) => {
    const uniqueFilename = Date.now() + '-' + path.extname(file.originalname);
    cb(null, uniqueFilename);
  },
});

// 2) Configure Mutler
exports.uploadAvatar = multer({
  storage: storage,
  limits: { fileSize: '5000000' },
  fileFilter: (req, file, cb) => {
    // set acceptable extension

    const fileTypes = /jpeg|jpg|png|gif|webp/;
    //check if file extention matches extension
    const extname = fileTypes.test(path.extname(file.originalname));
    //check if file mimetype matches extension
    const mimeType = fileTypes.test(file.mimetype);

    // check if everything is ok

    if (mimeType && extname) return cb(null, true);
    if (!mimeType || !extname)
      return cb(
        'File type not supported please upload a jpeg,jpg,png,gif or webp '
      );
  },
}).single('avatar');
