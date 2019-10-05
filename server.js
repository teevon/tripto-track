const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
require('./database/database');
require('dotenv').config();

app.use(cors());
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  );
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(express.json({ extended: false }));

app.use('/', express.static(path.join(__dirname, '/build/')));
app.use(require('./routes/Auth/login'));
app.use(require('./routes/Auth/register'));
app.use(require('./routes/Auth/forgot_password'));
app.use(require('./routes/Contact/contact'));
app.use(require('./routes/Item/item'));
app.use(require('./routes/Budget/budget'));

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
const PORT = process.env.PORT || 3500;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/build/index.html')
})