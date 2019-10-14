const petsController = {};
const petQuery = require('../../database/query/petQuery.js');
const db = require('../../database/database');

/**
 * @description gets all Pets from a single user(owner)
 * @requirements : a owner_id stored inside res.locals
 */
petsController.getPets = (req, res, next) => {
  console.log('\n*********** petsController.getPets ****************', `\nMETHOD: ${req.method} \nENDPOINT: '${req.url}' \nBODY: ${JSON.stringify(req.body)} \nLOCALS: ${JSON.stringify(res.locals)} `);

  // NOTES: owner_id will be retrieved from a user logging in
  // const { id } = res.locals.owner;
  const id = 2;

  if (id) {
    db.query(petQuery.getPetsFromOwner, [id])
      .then((petList) => {
        res.locals.pets = petList.rows;
        return next();
      })
      .catch((err) => next(err));
  }
};

/**
 * @description adds a Pet from a single user(owner) to the database
 * (vet_id is optional, owner_id must be required)
 * @requirements : a owner_id stored inside res.locals
 * @optionals : a vet_id stored inside res.locals
 */
petsController.addPet = (req, res, next) => {
  console.log('\n*********** petsController.addPet ****************', `\nMETHOD: ${req.method} \nENDPOINT: '${req.url}' \nBODY: ${JSON.stringify(req.body)} \nLOCALS: ${JSON.stringify(res.locals)} `);

  // NOTES: check with frontend to see the structure of how they send a pet data to server
  // eslint-disable-next-line object-curly-newline
  const { name, type, gender, spayed, birthYear, ownerID, vetID } = req.body.pet;
  // const { vetID } = res.locals;

  if (req.body.pet) {
    const addPet = vetID ? petQuery.addPet : petQuery.addPetWithoutVet;
    console.log("----------------------------", petQuery);
    const petData = vetID ? [name, type, gender, spayed, birthYear, ownerID, vetID] : [name, type, gender, spayed, birthYear, ownerID];
    db.query(addPet, petData)
      .then((newPet) => {
        res.locals.newPet = newPet.rows;
        return next();
      })
      .catch((err) => next(err));
  }
};

module.exports = petsController;
