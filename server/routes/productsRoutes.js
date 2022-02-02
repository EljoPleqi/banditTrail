const express = require('express');
const {
  getAllProducts,
  getSingleProduct,
  listProduct,
  checkID,
} = require('../controllers/productControllers');

const router = express.Router();

router.param('id', checkID);
router.route('/').get(getAllProducts).post(listProduct);
router.route('/:id').get(getSingleProduct);

module.exports = router;
