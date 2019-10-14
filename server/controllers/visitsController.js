const visitsController = {};
const visitQuery = require('../../database/query/visitQuery');
const db = require('../../database/database');

/**
* @description adds a Visit from a single user(owner) to the database
* (vet_id is optional, pet_id must be required)
* @requirements : a pet_id stored inside req.body
* @optionals : a vet_id stored inside req.body
*/
visitsController.createVisit = (req, res, next) => {
  console.log('\n*********** visitsController.createVisits ****************', `\nMETHOD: ${req.method} \nENDPOINT: '${req.url}' \nBODY: ${JSON.stringify(req.body)} \nLOCALS: ${JSON.stringify(res.locals)} `);
  // Might add a file key later
  const { date, notes, petID, vetID } = req.body.visit;

  if (req.body.visit) {
    // if vetID exist then we query normally otherwise we query without the vet_id column added
    const addVisit = vetID ? visitQuery.createVisit : visitQuery.createVisitWithoutVet;

    const visitData = vetID ? [date, notes, petID, vetID] : [date, notes, petID];
    db.query(addVisit, visitData)
      .then((newVisit) => {
        // successful query
        res.locals.newVisit = newVisit.rows[0];
        return next();
      })
      .catch((visitQueryErr) => next(visitQueryErr))
  }
}

/**
* @description adds a Visit from a single user(owner) to the database
* (vet_id is optional, pet_id must be required)
* @requirements : a pet_id stored inside req.body
* @optionals : a vet_id stored inside req.body
*/
visitsController.getVisits = (req, res, next) => {
  console.log('\n*********** visitsController.getVisits ****************', `\nMETHOD: ${req.method} \nENDPOINT: '${req.url}' \nBODY: ${JSON.stringify(req.body)} \nLOCALS: ${JSON.stringify(res.locals)} `);

  const { pets } = res.locals;
  // owner ID
  const { id } = res.locals.owner;

  if (pets) {
    // pets.forEach((pet) => {
    //   db.query(visitQuery.getVisit, [pet.id])
    //     .then((visitList) => {
    //       console.log(`VISIT FROM ${pet.id}: `, visitList.rows)
    //     })
    //     .catch((err) => next(err))
    // })

    const promises = pets.map((pet) => db.query(visitQuery.getVisit, [pet.id]));
    Promise.all(promises)
    .then((visitList) => {
      visitList.forEach((visit) => {
        console.log(`VISIT: `, visit.rows)
        // ! Recieving 
        //  VISIT:  []
        //  VISIT:  []
        //  VISIT:  [ { visit_id: 1, date: '08/20/2019', notes: 'check-up' },
        //  { visit_id: 2, date: '06/14/2018', notes: 'yearly check-up' } ]
        //  VISIT:  []
        })
      })
      .catch((err) => next(err))
    next()
  }
}



// owner logs in -> gets array of pets -> iterate through each pet & get all visits from each pet
module.exports = visitsController;