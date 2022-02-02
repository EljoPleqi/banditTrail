const express = require('express');
const { ProductDetails } = require('../models');

exports.checkID = (req, res, next, val) => {
  if (!req.params.ProductId) {
    return res.status(404).json({ status: 'fail', message: 'Invalid ID' });
  }
  next();
};
exports.getProductDetails =
  ('/',
  async (req, res) => {
    console.log('hi');
    const allProductDetails = await ProductDetails.findAll();
    res.json(allProductDetails);
  });

exports.getSingleProductDetail =
  ('/:productId',
  async (req, res) => {
    const ProductId = req.params.ProductId;
    const uniqueProductDetails = await ProductDetails.findAll({
      where: { ProductId: ProductId },
    });
    res.json(uniqueProductDetails);
  });
exports.createProductDetail =
  ('/',
  async (req, res) => {
    const productDetail = req.body;
    await ProductDetails.create(productDetail);
    res.json(productDetail);
  });
