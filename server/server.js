const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const accountsRouter = require('./routes/accountsRouter');
const petsRouter = require('./routes/petsRouter');

const app = express();

const PORT = 3000;

// db.query('SELECT * FROM pets', (err, res) => {
//   console.log('this is the db response: ', res.rows);
// });

app.use(bodyParser.json(), (req, res, next) => {
  console.log('\n*********** BodyParser ****************', `\nMETHOD: ${req.method} \nENDPOINT: '${req.url}' \nBODY: ${JSON.stringify(req.body)}`);
  // eslint-disable-next-line max-len
  // console.log('\n*********** CookieParser ****************', `\nMETHOD: ${req.method} \nENDPOINT: '${req.url}' \nCOOKIES: ${JSON.stringify(req.cookies)}`);
  return next();
});

app.use('/accounts', accountsRouter);

app.use('/pets', petsRouter);

app.use('/build', express.static(path.resolve(__dirname, '../build')));

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../client/index.html')));

app.all('*', (req, res) => {
  res.status(404).send('Page not found assholes!');
});

app.use('/', (err, req, res, next) => {
  const defaultError = {
    status: 500,
    message: 'express error caught unknown middleware error'
  };
  const newError = { ...defaultError, ...err };
  console.log('This is newError object: ', newError);
  console.log('This is global error handler: ', newError.message);
  res.status(newError.status).send(newError.message);
});

app.listen(PORT, () => console.log(`you are being heard on port ${PORT}`));
