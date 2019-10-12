const petsController = {};
const db = require('../../database/database');

/**
 * @description gets all Pets from a single user(owner)
 * @requirements : a owner_id stored inside res.locals
 */
petsController.getPets = (req, res, next) => {
  console.log('\n*********** petsController.getPets ****************', `\nMETHOD: ${req.method} \nENDPOINT: '${req.url}' \nBODY: ${JSON.stringify(req.body)} \nLOCALS: ${JSON.stringify(res.locals)} `);

  db.query('SELECT * FROM pets WHERE owner_id = $1', [1], (err, response) => {
    if (err) return next(err);
    res.locals.pets = response.rows;
    return next();
  });
};

module.exports = petsController;
