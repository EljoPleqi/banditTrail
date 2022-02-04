const { Trails } = require('../models');

exports.checkID = (req, res, next, val) => {
  if (!req.params.id) {
    return res.status(404).json({ status: 'fail', message: 'Invalid ID' });
  }
  next();
};

exports.getAllTrails =
  ('/',
  async (req, res) => {
    const allTrails = await Trails.findAll();
    res.json(allTrails);
  });

exports.getSingleTrail =
  ('/traiId',
  async (req, res) => {
    const trailId = req.params.id;
    const uniqueTrail = await Trails.findByPk(trailId);
    res.json(uniqueTrail);
  });

exports.createNewTrail =
  ('/',
  async (req, res) => {
    await Trails.create({
      trailName: req.body.trailName,
      trailDescription: req.body.trailDescription,
      trailDuration: req.body.trailDuration,
      traiDistance: req.body.trailDistance,
      trailDifficulty: req.body.trailDifficulty,
    });
  });
