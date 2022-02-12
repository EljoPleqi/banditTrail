const express = require('express');
const { authUser } = require('../middleware/authmiddleware');
const {
  getAllProducts,
  getSingleProduct,
  getProductsByUserID,
  listProduct,
  uploadFeatureImg,
  getFilteredProducts,
  uploadProductImgs,
  checkID,
  deleteListing,
} = require('../controllers/productControllers');

const router = express.Router();

router.param('id', checkID);
router
  .route('/')
  .get(getAllProducts)
  .post(authUser, uploadFeatureImg, listProduct, uploadProductImgs);

router.route('/:id').get(getSingleProduct).delete(deleteListing);
router.route('/filtered').post(getFilteredProducts);
router.route('/by_userId/:UserId').get(getProductsByUserID);

module.exports = router;
