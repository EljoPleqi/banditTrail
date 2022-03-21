const { raw } = require('express');
const express = require('express');
const multer = require('multer');
const path = require('path');
const { Bikes, Apparel, Parts, Products } = require('../models');

exports.checkID = (req, res, next, val) => {
  if (!req.params.id) {
    return res.status(404).json({ status: 'fail', message: 'Invalid ID' });
  }
  next();
};

// GET ALL PRODUCT ENTRIES THAT HAVEN'T BEEN SOLD FROM THE DB

exports.getAllProducts = async (req, res) => {
  const bikes = await Bikes.findAll({ where: { sold: false } });
  const parts = await Parts.findAll({ where: { sold: false } });
  const apparel = await Apparel.findAll({ where: { sold: false } });

  const allProducts = [...bikes, ...parts, ...apparel];

  res.json(allProducts);
};

// GET A UNIQUE PRODUCT ENTRY FROM THE DB

exports.getSingleProduct = async (req, res) => {
  const id = req.params.id;

  const bike = await Bikes.findByPk(id, { raw: true });
  const part = await Parts.findByPk(id, { raw: true });
  const apparel = await Apparel.findByPk(id, { raw: true });

  if (bike) res.json(bike);
  if (part) res.json(part);
  if (apparel) res.json(apparel);
};

// DELETE Listing

exports.deleteListing = async (req, res) => {
  const id = req.params.id;

  const bike = await Bikes.destroy({ where: { id }, raw: true });
  const part = await Parts.destroy({ where: { id }, raw: true });
  const apparel = await Apparel.destroy({ where: { id }, raw: true });

  // console.log(bike, part, apparel);
  // if (bike) bike.destroy();
  // if (part) part.destroy();
  // if (apparel) apparel.destroy();

  res.json('LISTING DELETE WAS SUCESSFUL ');
};

//  UPDATE LISTING

exports.updateListing = async (req, res) => {
  try {
    const updatedProduct = { featuredImage: req.file.path, ...req.body };

    Bikes.update(updatedProduct, {
      where: { id: req.params.id },
    });
    Apparel.update(updatedProduct, {
      where: { id: req.params.id },
    });
    Parts.update(updatedProduct, {
      where: { id: req.params.id },
    });
    res.json('Product Updated Successfully');
  } catch (error) {
    console.log(error);
  }
};
//  GET PRODUCTS BY USER ID
exports.getProductsByUserID = async (req, res) => {
  const userId = req.params.UserId;

  const bikes = await Bikes.findAll({ where: { UserId: userId }, raw: true });
  const parts = await Parts.findAll({ where: { UserId: userId }, raw: true });
  const apparel = await Apparel.findAll({
    where: { UserId: userId },
    raw: true,
  });

  const products = [...bikes, ...parts, ...apparel];

  res.json(products);
};

// GET FILTERED PRODUCTS

exports.getFilteredProducts = async (req, res) => {
  const { brand, type, ridingStyle, condition } = req.body;

  console.log(brand, type, ridingStyle, condition);

  let filteredRequest = { sold: false };

  if (brand) filteredRequest.brand = brand;
  if (type) filteredRequest.type = type;
  if (ridingStyle) filteredRequest.ridingStyle = ridingStyle;
  if (condition) filteredRequest.condition = condition;

  const bikes = await Bikes.findAll({ where: filteredRequest, raw: true });
  const parts = await Parts.findAll({ where: filteredRequest, raw: true });
  const apparel = await Apparel.findAll({ where: filteredRequest, raw: true });
  console.log(filteredRequest);
  const filteredResponse = [...bikes, ...parts, ...apparel];

  // console.log(filteredResponse);

  res.json(filteredResponse);
};
// MARK PRODUCT AS SOLD

exports.sellListings = async (req, res) => {
  try {
    const items = [...req.body];

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

  const bikes = await Bikes.findAll({ where: { sold: true } });
  const parts = await Parts.findAll({ where: { sold: true } });
  const apparel = await Apparel.findAll({ where: { sold: true } });
  const products = [...bikes, ...apparel, ...parts];

  res.json(products);
};

//  CREATE A NEW PRODUCT ENTRY IN THE DB
exports.listProduct = async (req, res) => {
  const imagePaths = req.files.images.map((file) => file.path).join('_');

  const [featuredImage] = req.files.featuredImage;

  const listingType = req.body.listingType;

  console.log(req.body);

  try {
    if (listingType === 'Bike') {
      await Bikes.create({
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
    } else if (listingType === 'Part') {
      await Parts.create({
        featuredImage: featuredImage.path,
        productTitle: req.body.productTitle,
        category: req.body.category,
        price: req.body.price,
        currency: req.body.currency,
        productDescription: req.body.productDescription,
        brand: req.body.brand,
        type: req.body.type,
        primaryColor: req.body.primaryColor,
        secondaryColor: req.body.secondaryColor,
        material: req.body.material,
        condition: req.body.condition,
        images: imagePaths,
        UserId: req.body.UserId,
      });
    } else if (listingType === 'Apparel') {
      await Apparel.create({
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
        material: req.body.material,
        condition: req.body.condition,
        images: imagePaths,
        UserId: req.body.UserId,
      });
    } else {
      console.log('PLEASE ENTER A LISTING TYPE');
    }

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
