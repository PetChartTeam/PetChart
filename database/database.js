const { Pool } = require('pg');

const uri = 'postgres://yigvhbja:adDTUPq-p-1gUi1sgNlhldRwZN8XqHf9@salt.db.elephantsql.com:5432/yigvhbja';

const pool = new Pool({
  connectionString: uri,
});

module.exports = pool;
