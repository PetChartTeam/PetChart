const db = require('../../database/database');

const vaccinesController = {};

/**
 * @description adds Vaccine data for the Pet upon pet creation 
 * @requirements : a pet_id, name, date must provided in the req.body
 * @optionals :
 * @body : { vac: {...} }
 */
vaccinesController.createVaccines = (req, res, next) => {
  // incoming request will have all pet data
  // pull out the pet_id, name, date from req body
  const { name, date, pet_id } = req.body;

  const vaccineQuery = {
    name: 'create vaccine',
    text: 'INSERT INTO vaccines (name, date, pet_id) VALUES $1, $2, $3 RETURNING *',
    values: [name, date, pet_id],
    rowMode: 'array'
  }

  db.query(vaccineQuery, (err, success) => {
    // catch error
    if (err) {
      const { detail } = err;
      const errorObj = 
    }
  })
}

module.exports = vaccinesController;