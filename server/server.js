const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;

app.use('/build', express.static(path.resolve(__dirname, '../build')));

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../client/index.html')));

app.listen(PORT, () => console.log(`you are being heard on port ${PORT}`));
