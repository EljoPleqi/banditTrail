const express = require('express');
const { authUser } = require('../middleware/authmiddleware');

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
} = require('../controllers/userControllers');

const router = express.Router();

router.route('/').get(getAllUsers).post(uploadAvatar, createUser);
router.route('/login').post(login);
router
  .route('/:username')
  .get(getSingleUser)
  .delete(authUser, deleteUser)
  .patch(uploadAvatar, updateUser);

router
  .route('/:username/payment_options')
  .get(getPaymentOptions)
  .post(createPaymentOption);

module.exports = router;
