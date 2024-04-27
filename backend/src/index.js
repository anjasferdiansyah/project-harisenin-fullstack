require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');

const router = require('./routes/router');
const { sequelize } = require('./models');

const user = require('./routes/userRouter');
const cart = require('./routes/cartRouter');
const userDetail = require('./routes/userDetailRouter');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: true, credentials: true }));

app.use('/api/user', user);
app.use('/api/cart', cart);
app.use('/api/userDetail', userDetail);

// cek koneksi ke mysql
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.log('Unable to connect to the database:', error);
  });

app.listen(process.env.SERVER_PORT, () => {
  console.log('Server Running on port', process.env.SERVER_PORT);
});
