const express = require('express');
const {
  checkID,
  getAllTrails,
  getSingleTrail,
  uploadFeatureImg,
  createNewTrail,
} = require('../controllers/trailsController');

const router = express.Router();

router.param('TrailId', checkID);
router.route('/').get(getAllTrails).post(createNewTrail);
router.route('/:TrailId').get(getSingleTrail);

module.exports = router;
