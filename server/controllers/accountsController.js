const bcrypt = require('bcrypt');
const db = require('../../database/database');

const accountsController = {};

const SALT_WORK_FACTOR = 10;

accountsController.createAccount = (req, res, next) => {
  // console.log('this is req.body createAccount: ', req.body);
  const { firstName, lastName, email } = req.body;
  bcrypt.hash(req.body.password, SALT_WORK_FACTOR)
    .then((hash) => {

      const query = {
        name: 'add-user',
        text: 'INSERT INTO owners (first_name, last_name, email, password) VALUES ($1, $2, $3, $4)',
        values: [firstName, lastName, email, hash],
        rowMode: 'array',
      };

      db.query(query, (err, success) => {

        if (err) {
          const { detail } = err;
          // err.message = detail;
          const errorObj = {};
          errorObj.message = detail;
          // console.log('create account error: ', err.message);
          return next(errorObj);
        }
        console.log('create account success: ', success);
        return next();
      });
    });
};

accountsController.login = (req, res, next) => {
  const { email, password } = req.body;
  const hashQuery = {
    name: 'retrieve hash password',
    text: `SELECT * FROM owners WHERE email = '${email}'`,
  };

  // console.log('this is the hash query obj: ', hashQuery);

  db.query(hashQuery, (hashQueryErr, profile) => {

    if (hashQueryErr) {
      console.log('error from password retrievel: ', hashQueryErr);
      return next(hashQueryErr);
    }

    // console.log('returned query SELECT obj: ', profile.rows[0].password);
    // console.log('this is req.body.password value: ', password);

    bcrypt.compare(password, profile.rows[0].password, (bcryptErr, passwordMatch) => {

      if (bcryptErr) {
        console.log('error from bcrypt compare: ', bcryptErr);
        return next(bcryptErr);
      }

      res.locals.passwordMatch = passwordMatch;

      if (!passwordMatch) {
        return next();
      }

      res.locals.owner = {
        id: profile.rows[0].owner_id,
        firstName: profile.rows[0].first_name,
        lastName: profile.rows[0].last_name,
        email: profile.rows[0].email,
      };

      return next();
    });
  });
};

module.exports = accountsController;
