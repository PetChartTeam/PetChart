const router = require('express').Router();

const petsController = require('../controllers/petsController');

/**
 * @endpoint : '/pets/'
 * @method : GET
 * @returns -> an array of all pets via JSON
 */
router.get('/', petsController.getPets, (req, res) => {
  const { pets } = res.locals;
  res.json(pets);
});

module.exports = router;
