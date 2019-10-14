const petsController = {};
const petQuery = require('../../database/query/petQuery.js');
const db = require('../../database/database');

/**
 * @description gets all Pets from a single user(owner)
 * @requirements : a owner_id(id) stored inside res.locals
 */
petsController.getPets = (req, res, next) => {
  console.log('\n*********** petsController.getPets ****************', `\nMETHOD: ${req.method} \nENDPOINT: '${req.url}' \nBODY: ${JSON.stringify(req.body)} \nLOCALS: ${JSON.stringify(res.locals)} `);

  // NOTES: id will be retrieved from a user logging in
  const { id } = res.locals.owner;
  const { passwordMatch, profileMatch } = res.locals;

  if (profileMatch && passwordMatch) {
    db.query(petQuery.getPetsFromOwner, [id])
      .then((petList) => {
        // successful query
        const newPetList = petList.rows.map(pet => {
          // switching keys for each pet from snake_case to camelCase
          const { pet_id, name, type, gender, spayed, birth_year, vet_id} = pet;
          return { id: pet_id, name, type, gender, spayed, birthYear: birth_year, vetID: vet_id };
        });

        res.locals.pets = newPetList;
        return next();
      })
      .catch((petQueryErr) => next(petQueryErr));
  }
};

/**
 * @description adds a Pet from a single user(owner) to the database
 * (vet_id is optional, owner_id must be required)
 * @requirements : a owner_id stored inside req.body
 * @optionals : a vet_id stored inside req.body
 * @body : { pet: {...} }
 */
petsController.addPet = (req, res, next) => {
  console.log('\n*********** petsController.addPet ****************', `\nMETHOD: ${req.method} \nENDPOINT: '${req.url}' \nBODY: ${JSON.stringify(req.body)} \nLOCALS: ${JSON.stringify(res.locals)} `);

  // NOTES: check with frontend to see the structure of how they send a pet data to server
  // eslint-disable-next-line object-curly-newline
  const { name, type, gender, spayed, birthYear, ownerID, vetID } = req.body.pet;
  // const { vetID } = res.locals;

  if (req.body.pet) {
    // if vetID exist then we query normally otherwise we query without the vet_id column added
    const addPet = vetID ? petQuery.addPet : petQuery.addPetWithoutVet;

    const petData = vetID ? [name, type, gender, spayed, birthYear, ownerID, vetID] : [name, type, gender, spayed, birthYear, ownerID];
    db.query(addPet, petData)
      .then((newPet) => {
        // successful query
        const { pet_id, name, type, gender, spayed, birth_year, owner_id, vet_id} = newPet.rows[0];
        res.locals.newPet = { id: pet_id, name, type, gender, spayed, birthYear: birth_year, ownerID: owner_id, vetID: vet_id };
        return next();
      })
      .catch((petQueryErr) => next(petQueryErr));
  }
};

module.exports = petsController;
