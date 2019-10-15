const router = require('express').Router();

const vaccinesController = require('../controllers/vaccinesController');

router.post('/', vaccinesController.createVaccines, (req, res, next) => {
  res.status(200).json({ test: 'did you receive this?' });
});

module.exports = router;
