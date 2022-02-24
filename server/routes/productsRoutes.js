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
  updateListing,
  sellListings,
} = require('../controllers/productControllers');

const router = express.Router();

router.param('id', checkID);
router.route('/').get(getAllProducts).post(uploadFeatureImg, listProduct);

router
  .route('/:id')
  .get(getSingleProduct)
  .delete(deleteListing)
  .patch(uploadFeatureImg, updateListing);
router.route('/filtered').post(getFilteredProducts);
router.route('/by_userId/:UserId').get(getProductsByUserID);
router.route('/checkout').put(sellListings);

module.exports = router;
