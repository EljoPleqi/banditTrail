const multer = require('multer');
const path = require('path');
const { Users, PaymentOptions, Subscription } = require('../models');
const bcrypt = require('bcrypt');
const subscription = require('../models/subscription');

require('dotenv').config({ path: './config.env' });

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

// GET ALL PROUCT ENTRIES FROM THE DB

exports.getAllUsers = async (req, res) => {
  const allUsers = await Users.findAll();
  res.json(allUsers);
};

// GET A UNIQUE PROUCT ENTRY FROM THE DB

exports.getSingleUser = async (req, res) => {
  console.log(req.params);
  const user = await Users.findOne({
    where: { username: req.params.username },
  });
  console.log(user);
  res.json(user);
};

exports.getUserById = async (req, res) => {
  const id = req.params.id;

  const user = await Users.findByPk(id);

  res.json(user);
};

// DELETE USER

exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  const user = await Users.findByPk(id);
  user.destroy();
  res.json('ACCOUNT DELETED SUCCESSFULLY ');
};

exports.updateUser = async (req, res) => {
  let user = await Users.findOne({
    where: { username: req.params.username },
  });

  const updatedUser = { avatar: req.file.path, ...req.body };

  Users.update((user = updatedUser), {
    where: { username: req.params.username },
  });

  res.json(user);
};

//  CREATE A NEW USER ENTRY IN THE DB
exports.createUser = async (req, res) => {
  try {
    // Get User data
    const {
      username,
      password,
      userEmail,
      userPhone,
      userDescription,
      userRidingStyle,
    } = req.body;

    const checkUsername = await Users.findOne({
      where: { username: username },
    });

    const checkEmail = await Users.findOne({
      where: { userEmail: userEmail },
    });

    if (checkUsername) return res.json({ error: ' Username taken' });
    if (checkEmail) return res.json({ error: 'Email already exists' });

    // create user with hashed password
    bcrypt.hash(password, 10).then(async (hash) => {
      await Users.create({
        avatar: req.file.path,
        username: username,
        password: hash,
        userEmail: userEmail,
        userPhone: userPhone,
        userDescription: userDescription,
        userRidingStyle: userRidingStyle,
      });

      const user = await Users.findOne({
        where: { username: username },
      });
      res.json(user);
    });

    // console.log(userData);
    // res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

exports.login = async (req, res) => {
  try {
    // Get User data
    const { username, password } = req.body;
    const user = await Users.findOne({ where: { username: username } });

    // check is user exists
    if (!user) res.json({ error: 'Rider does not exist' });

    // check if password is correct
    bcrypt.compare(password, user.password).then(async (match) => {
      if (!match) res.json({ error: 'Wrong password' });

      res.json(user);
    });

    // return access token
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

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

// add payment method to the user

exports.createPaymentOption = async (req, res) => {
  try {
    // const ccNumber = creditCardNumber.toString();

    // bcrypt.hash(ccNumber, 10).then(async (hash) => {  });
    PaymentOptions.create(
      // creditCardNumber: creditCardNumber,
      // cardHolder: cardHolder,
      // ccExpData: ccExpData,
      // cvcNumber: cvcNumber,
      req.body
    );

    res.json(req.body);
  } catch (error) {
    console.log(error);
  }
};

// Pull payment options from the database

exports.getPaymentOptions = async (req, res) => {
  const user = await Users.findAll({
    where: { username: req.params.username },
  });

  const {
    dataValues: { id },
  } = user[0];

  const userPaymentOptions = await PaymentOptions.findAll({
    where: { UserId: id },
  });

  res.json(userPaymentOptions);
};

// UPDATE SUBSCRIPTION

exports.changeSub = async (req, res) => {
  const { name, price, freeListings, pricePerListing } = req.body;
  const user = await Users.findAll({
    where: { username: req.params.username },
  });
  const {
    dataValues: { id },
  } = user[0];

  Subscription.update(
    { name: name, price: price, freeListings: freeListings, pricePerListing },
    { where: { UserId: id } }
  );
};
// PULL SUBSCRIPTION
exports.getSub = async (req, res) => {
  const user = await Users.findAll({
    where: { username: req.params.username },
  });

  const {
    dataValues: { id },
  } = user[0];

  const userSub = await Subscription.findAll({
    where: { UserId: id },
  });

  res.json(userSub);
};
