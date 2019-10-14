const router = require('express').Router();

const vetsController = require('../controllers/vetsController');

/**
 * @endpoint : '/vets'
 * @method : GET
 * @returns -> an array of all vets via JSON
 */
router.get('/', vetsController.searchVets, (req, res) => {
  res.status(200).send(res.locals.vets);
})

module.exports = router;
