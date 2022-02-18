const express = require('express');
const { default: product } = require('../../client/src/features/product');
const { Users, Products } = require('../models');

exports.getSearchResults('/search', async (req, res) => {
  const data = await Products.findAll({ include: { model: Users, where: {} } });
});
