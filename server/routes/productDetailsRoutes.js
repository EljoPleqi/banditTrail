const express = require('express');
const {
  getProductDetails,
  getSingleProductDetail,
  createProductDetail,
  checkID,
} = require('../controllers/productDetailsControllers');

const router = express.Router();

router.param('id', checkID);
router.route('/').get(getProductDetails).post(createProductDetail);
router.route('/:id').get(getSingleProductDetail);

module.exports = router;
