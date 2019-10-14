const petQuery = {};

petQuery.addPetWithoutVet = 'INSERT INTO pets (name, type, gender, spayed, birth_year, owner_id) VALUES ($1, $2, $3, $4, $5, $6)';
petQuery.addPet = 'INSERT INTO pets (name, type, gender, spayed, birth_year, owner_id, vet_id) VALUES ($1, $2, $3, $4, $5, $6, $7)';
petQuery.getPetsFromOwner = 'SELECT * FROM pets WHERE owner_id = $1';

module.exports = petQuery;
