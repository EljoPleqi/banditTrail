const express = require('express');
const {
  createUser,
  uploadAvatar,
  getAllUsers,
  getSingleUser,

  login,
} = require('../controllers/userControllers');

const router = express.Router();

router.route('/').get(getAllUsers).post(uploadAvatar, createUser);
router.route('/login').post(login);
router.route('/:username').get(getSingleUser);

module.exports = router;
