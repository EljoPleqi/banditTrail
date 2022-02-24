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
  getUserById,
} = require('../controllers/userControllers');

const router = express.Router();
router.route('/login').post(login);
router.route('/').get(getAllUsers).post(uploadAvatar, createUser);
router.route('/:id').get(getUserById);

router
  .route('/:username')
  .post(getSingleUser)
  .delete(deleteUser)
  .patch(uploadAvatar, updateUser);

router
  .route('/:username/payment_options')
  .get(getPaymentOptions)
  .post(createPaymentOption);

module.exports = router;
