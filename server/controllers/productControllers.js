const express = require('express');
const multer = require('multer');
const path = require('path');
const { Products, ProductDetails } = require('../models');

exports.checkID = (req, res, next, val) => {
  if (!req.params.id) {
    return res.status(404).json({ status: 'fail', message: 'Invalid ID' });
  }
  next();
};

// GET ALL PROUCT ENTRIES FROM THE DB

exports.getAllProducts =
  ('/',
  async (req, res) => {
    const allProducts = await Products.findAll();
    res.json(allProducts);
  });

// GET A UNIQUE PROUCT ENTRY FROM THE DB

exports.getSingleProduct =
  ('/:id',
  async (req, res) => {
    const id = req.params.id;
    const product = await Products.findByPk(id);
    res.json(product);
  });

//  CREATE A NEW PRODUCT ENTRY IN THE DB
exports.listProduct =
  ('/',
  async (req, res) => {
    try {
      const product = await Products.create({
        featuredImage: req.file.path,
        productTitle: req.body.productTitle,
        price: req.body.price,
        currency: req.body.currency,
        productDescription: req.body.productDescription,
      });
      const productId = product.id;
      await ProductDetails.create({
        brand: req.body.brand,
        type: req.body.type,
        primaryColor: req.body.primaryColor,
        secondaryColor: req.body.secondaryColor,
        size: req.body.size,
        gender: req.body.gender,
        ridingStyle: req.body.ridingStyle,
        wheelSize: req.body.wheelSize,
        material: req.body.material,
        condition: req.body.condition,
        ProductId: productId,
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
    cb(null, './public/img');
  },
  filename: (req, file, cb) => {
    const uniqueFilename = Date.now() + '-' + path.extname(file.originalname);
    cb(null, uniqueFilename);
  },
});

// 2) Configure Mutler
exports.uploadFeatureImg = multer({
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
}).single('featuredImage');
