const express = require('express');
const multer = require('multer');
const path = require('path');
const { Products } = require('../models');

exports.checkID = (req, res, next, val) => {
  if (!req.params.id) {
    return res.status(404).json({ status: 'fail', message: 'Invalid ID' });
  }
  next();
};

// GET ALL PRODUCT ENTRIES THAT HAVEN'T BEEN SOLD FROM THE DB

exports.getAllProducts = async (req, res) => {
  const allProducts = await Products.findAll({ where: { sold: false } });

  res.json(allProducts);
};

// GET A UNIQUE PRODUCT ENTRY FROM THE DB

exports.getSingleProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Products.findByPk(id);
  res.json(product);
};

// DELETE Listing

exports.deleteListing = async (req, res) => {
  console.log(req.params);
  const id = req.params.id;
  const product = await Products.findByPk(id);
  product.destroy();
  res.json('LISTING DELETE WAS SUCESSFUL ');
};

//  UPDATE LISTING

exports.updateListing = async (req, res) => {
  try {
    let product = await Products.findOne({ where: { id: req.params.id } });

    const updatedProduct = { featuredImage: req.file.path, ...req.body };

    Products.update((product = updatedProduct), {
      where: { id: req.params.id },
    });
    res.json(product);
  } catch (error) {
    console.log(error);
  }
};
//  GET PRODUCTS BY USER ID
exports.getProductsByUserID = async (req, res) => {
  const userId = req.params.UserId;

  const products = await Products.findAll({ where: { UserId: userId } });
  res.json(products);
};

// GET FILTERED PRODUCTS

exports.getFilteredProducts = async (req, res) => {
  const { brand, type, ridingStyle, condition } = req.body;

  let filteredRequest = { where: { sold: false } };

  if (brand) filteredRequest.where.brand = brand;
  if (type) filteredRequest.where.type = type;
  if (ridingStyle) filteredRequest.where.ridingStyle = ridingStyle;
  if (condition) filteredRequest.where.condition = condition;

  const filteredProducts = await Products.findAll(filteredRequest);

  res.json(filteredProducts);
};
// MARK PRODUCT AS SOLD

exports.sellListings = async (req, res) => {
  try {
    const items = [...req.body];

    console.log(items);

    for (const item of items) {
      Products.update({ sold: true }, { where: { id: item.id } });
    }

    res.json(items);
  } catch (error) {
    console.log(error);
  }
};
// GET SOLD PRODUCTS

exports.getSoldItems = async (req, res) => {
  const { UserId } = req.body;

  const products = await Products.findAll({
    where: { UserId: UserId, sold: true },
  });
  res.json(products);
};

//  CREATE A NEW PRODUCT ENTRY IN THE DB
exports.listProduct = async (req, res) => {
  const imagePaths = req.files.images.map((file) => file.path).join('_');

  const [featuredImage] = req.files.featuredImage;
  console.log(featuredImage);

  try {
    await Products.create({
      featuredImage: featuredImage.path,
      productTitle: req.body.productTitle,
      price: req.body.price,
      currency: req.body.currency,
      productDescription: req.body.productDescription,
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
      images: imagePaths,
      UserId: req.body.UserId,
    });
    res.json(req.body);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

// UPLOAD PRODUCT IMG

//  1) Store image on the computers disk
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/img/product-imgs');
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
}).fields([
  { name: 'featuredImage', maxCount: 1 },
  { name: 'images', maxCount: 6 },
]);
