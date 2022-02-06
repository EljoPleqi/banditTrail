const express = require('express');
const {
  createUser,
  uploadAvatar,
  getAllUsers,
  getSingleUser,
  checkID,
} = require('../controllers/userControllers');

const router = express.Router();

router.param('id', checkID);
router.route('/').get(getAllUsers).post(uploadAvatar, createUser);
router.route('/:id').get(getSingleUser);

module.exports = router;
