const db = require('../../database/database');

vetsController = {};

/**
 * @description gets all Vets from the db
 * @requirements : res stored inside res.locals.vets with at minimum vetId
 * @stretch : incorporate owners info into vet query
 */
vetsController.searchVets = (req, res, next) => {
  // standard query obj that can be modified for additional features
  const query = {
    name: 'search vets',
    text: 'SELECT * FROM vets',
    /* text: 'SELECT * FROM vets WHERE column = ${params}' */
  }
  // query the db for all available vet info
  db.query(query, (searchErr, vets) => {
    if (searchErr) {
      searchErr.status = 404;
      searchErr.message = 'error in the vets controller search query';
      return next(searchErr);
    }

    // NEED TO FINISH THIS FUNCTIONALITY!!!
    res.locals.vets = vets.rows;

    return next();
  });
};

module.exports = vetsController;
