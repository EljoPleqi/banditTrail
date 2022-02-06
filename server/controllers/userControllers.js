const multer = require('multer');
const path = require('path');
const { Users } = require('../models');

exports.checkID = (req, res, next, val) => {
  if (!req.params.id) {
    return res.status(404).json({ status: 'fail', message: 'Invalid ID' });
  }
  next();
};

// GET ALL PROUCT ENTRIES FROM THE DB

exports.getAllUsers =
  ('/',
  async (req, res) => {
    const allUsers = await Users.findAll();
    res.json(allUsers);
  });

// GET A UNIQUE PROUCT ENTRY FROM THE DB

exports.getSingleUser =
  ('/:id',
  async (req, res) => {
    const id = req.params.id;
    const user = await Users.findByPk(id);
    res.json(user);
  });

//  CREATE A NEW PRODUCT ENTRY IN THE DB
exports.createUser =
  ('/',
  async (req, res) => {
    try {
      const user = await Products.create({
        avatar: req.file.path,
        username: req.body.username,
        userEmail: req.body.userEmail,
        userPhone: req.body.userPhone,
        userDescription: req.body.userDescription,
        userRidingStyle: req.body.userRidingStyle,
      });
      res.json(req.body);
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
