const express = require('express');
const { Products } = require('../models');

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
    const product = req.body;
    await Products.create(product);
    res.json(product);
  });
