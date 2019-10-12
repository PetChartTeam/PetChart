const router = require('express').Router();

const accountsController = require('../controllers/accountsController');

router.post('/register', (req, res) => {
  console.log('this is accounts/register endpoint: ', req.body);
  res.status(200).send('Thanks for the request!');
});

module.exports = router;
