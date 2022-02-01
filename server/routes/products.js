const express = require('express');
const router = express.Router();
const { Products } = require('../models');

router.get('/', async (req, res) => {
  const allProducts = await Products.findAll();
  res.json(allProducts);
});

router.post('/', async (req, res) => {
  const product = req.body;
  await Products.create(product);
  res.json(product);
});

router.patch('/:id', async (req, res, next) => {
  await Products.update(
    { condition: req.body.condition },
    { where: req.params.id }
  );
});

module.exports = router;
