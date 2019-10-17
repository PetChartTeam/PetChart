const router = require('express').Router();
const surgeryController = require('../controllers/surgeryController');

router.post('/', surgeryController.createSurgery, (req, res) => {
  const { newSurgery } = res.locals;
  res.json(newSurgery);
});

module.exports = router;
