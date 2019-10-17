const surgeryQuery = {};

surgeryQuery.createSurgeryWithoutVisitID = 'INSERT INTO surgeries (name, date, pet_id) VALUES ($1, $2, $3) RETURNING *';
surgeryQuery.createSurgery = 'INSERT INTO surgeries (name, date, pet_id, visit_id) VALUES ($1, $2, $3, $4) RETURNING *';
surgeryQuery.getSurgeries = 'SELECT surgery_id, name, date FROM surgeries WHERE pet_id = $1';

module.exports = surgeryQuery;
