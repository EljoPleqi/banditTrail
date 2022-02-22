const express = require('express');

const {
  createUser,
  uploadAvatar,
  getAllUsers,
  getSingleUser,
  login,
  deleteUser,
  updateUser,
  createPaymentOption,
  getPaymentOptions,
  checkAuth,
} = require('../controllers/userControllers');

const router = express.Router();
router.route('/login').post(login).get(checkAuth);
router.route('/').get(getAllUsers).post(uploadAvatar, createUser);

router
  .route('/:username')
  .get(getSingleUser)
  .delete(deleteUser)
  .patch(uploadAvatar, updateUser);

router
  .route('/:username/payment_options')
  .get(getPaymentOptions)
  .post(createPaymentOption);

module.exports = router;
