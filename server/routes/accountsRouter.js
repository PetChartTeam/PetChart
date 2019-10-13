const router = require('express').Router();

const accountsController = require('../controllers/accountsController');

router.post('/register', accountsController.createAccount, (req, res) => {
  // console.log('this is accounts/register endpoint: ', res.body);
  res.status(200).send('Thanks for the request!');
});

router.get('/login', accountsController.login, (req, res) => {
  console.log('res obj in get router: ', res.locals);

  if (res.locals.passwordMatch) {
    res.status(200).send(res.locals.owner);
  } else {
    res.status(200).send('Incorrect password dummy!');
  }
});

module.exports = router;
