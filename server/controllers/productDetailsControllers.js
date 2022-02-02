const express = require('express');
const { ProductsDetails } = require('../models');
exports.checkID = (req, res, next, val) => {
  if (!req.params.id) {
    return res.status(404).json({ status: 'fail', message: 'Invalid ID' });
  }
  next();
};
exports.getProductDetails = (req, res) => {};
exports.getSingleProductDetail = (req, res) => {};
exports.createProductDetail = (req, res) => {};
