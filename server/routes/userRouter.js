const express = require('express');
const {
  createUser,
  uploadAvatar,
  getAllUsers,
  getSingleUser,
  checkID,
} = require('../controllers/userControllers');

const router = express.Router();

router.param('username', checkID);
router.route('/').get(getAllUsers).post(uploadAvatar, createUser);
router.route('/:username').get(getSingleUser);

module.exports = router;
