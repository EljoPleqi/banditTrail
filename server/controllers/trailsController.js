const { Trails } = require('../models');
const multer = require('multer');
const path = require('path');

exports.checkID = (req, res, next, val) => {
  if (!req.params.id) {
    return res.status(404).json({ status: 'fail', message: 'Invalid ID' });
  }
  next();
};

exports.getAllTrails =
  ('/',
  async (req, res) => {
    const allTrails = await Trails.findAll();
    res.json(allTrails);
  });

exports.getSingleTrail =
  ('/traiId',
  async (req, res) => {
    const trailId = req.params.id;
    const uniqueTrail = await Trails.findByPk(trailId);
    res.json(uniqueTrail);
  });

exports.createNewTrail =
  ('/',
  async (req, res) => {
    await Trails.create({
      trailName: req.body.trailName,
      trailDescription: req.body.trailDescription,
      trailDuration: req.body.trailDuration,
      traiDistance: req.body.trailDistance,
      trailDifficulty: req.body.trailDifficulty,
    });
  });

// UPLOAD TRAILS IMG

//  1) Store image on the computers disk
const storage = multer.diskStorage({
  destination: (req, file, callb) => {
    callb(null, `/public/img`);
  },
  filename: (req, file, callb) => {
    const uniqueFilename = ` ${Date.now()}${path.extname(file.orginalname)}`;
    callb(null, uniqueFilename);
  },
});

// 2) Configure Mutler
exports.uploadFeatureImg = multer({
  storage,
  limits: { fileSize: '5000000' },
  fileFilter: (req, file, cb) => {
    // set acceptable extension

    const fileTypes = /jpeg|jpg|png|gif|webp/;
    //check if file extention matches extension
    const extname = fileTypes.test(path.extname(file.originalname));
    //check if file mimetype matches extension
    const mimeType = fileTypes.test(file.mimetype);

    // check if everything is ok

    if (mimeType && extname) return cd(null, true);
    if (!mimeType || !extname)
      return cb(
        'File type not supported please upload a jpeg,jpg,png,gif or webp '
      );
  },
}).single('featuredImage');
