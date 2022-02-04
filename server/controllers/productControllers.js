const express = require('express');
const multer = require('multer');
const { Products, ProductDetails } = require('../models');

exports.checkID = (req, res, next, val) => {
  if (!req.params.id) {
    return res.status(404).json({ status: 'fail', message: 'Invalid ID' });
  }
  next();
};

exports.getAllProducts =
  ('/',
  async (req, res) => {
    const allProducts = await Products.findAll();
    res.json(allProducts);
  });

exports.getSingleProduct =
  ('/:id',
  async (req, res) => {
    const id = req.params.id;
    const product = await Products.findByPk(id);
    res.json(product);
  });

exports.listProduct =
  ('/',
  async (req, res) => {
    await Products.create({
      productTitle: req.body.productTitle,
      price: req.body.price,
      currency: req.body.currency,
      productDescription: req.body.productDescription,
      username: req.body.username,
    }).then((product) => {
      product.ProductDetails({
        category: req.body.category,
        brand: req.body.brand,
        type: req.body.type,
        primaryColor: req.body.primaryColor,
        secondaryColor: req.body.secondaryColor,
        size: req.body.size,
        gender: req.body.gender,
        ridingStyle: req.body.ridingStyle,
        material: req.body.material,
        condition: req.body.condition,
      });
    });
    res.json(req.body);
  });
