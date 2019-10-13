const router = require('express').Router();

const accountsController = require('../controllers/accountsController');

router.post('/register', accountsController.createAccount, (req, res) => {
  res.status(200).send('Thanks for the request!');
});

router.get('/login', accountsController.login, (req, res) => {
  if (res.locals.profileMatch) {
    if (res.locals.passwordMatch) {
      res.status(200).send(res.locals);
    } else {
      res.status(200).send('Incorrect password dummy!');
    }
  } else {
    res.status(200).send('You need to register silly!');
  }
});

module.exports = router;
