const express = require('express');
const {
  getProductDetails,
  getSingleProductDetail,
  createProductDetail,
  checkID,
} = require('../controllers/productDetailsControllers');

const router = express.Router();

router.param('ProductId', checkID);
router.route('/').get(getProductDetails);
router.route('/').post(createProductDetail);
router.route('/:ProductId').get(getSingleProductDetail);

module.exports = router;
