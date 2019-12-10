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

/**
 * @endpoint : '/pets/'
 * @method : POST
 * @returns -> a single pet object via JSON
 */
router.post('/', petsController.addPet, (req, res) => {
  const { newPet } = res.locals;
  res.json(newPet);
});

module.exports = router;
