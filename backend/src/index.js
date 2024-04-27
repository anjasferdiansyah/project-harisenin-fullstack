require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');

const router = require('./routes/router');
const { sequelize } = require('./models');

const user = require('./routes/userRouter');
const cart = require('./routes/cartRouter');
const product = require('./routes/productRoute');
const userDetail = require('./routes/userDetailRouter');
const product = require('./routes/productRouter');
const category = require('./routes/categoryRouter');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: true, credentials: true }));

app.use('/api/user', user);
app.use('/api/cart', cart);
app.use('/api/userDetail', userDetail);
app.use('/api/product', product);
<<<<<<< HEAD
app.use('/api/category', category);
=======

>>>>>>> a3f1f7a787d8929545cc83aece5e53dd9ce8b9a9

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
