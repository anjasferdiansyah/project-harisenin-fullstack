require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');

const router = require('./routes/router');
const { sequelize } = require('./models');
const user = require('./routes/userRouter');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: true, credentials: true }));

// app.use('/', router);
app.use('/api/user', user);

// app.post('/api/user', async (req, res) => {
//   const hashedPassword = bcrypt.hashSync(req.body.password, 10);

//   const result = await user.create({
//     phoneNumber: req.body.phoneNumber,
//     username: req.body.username,
//     email: req.body.email,
//     password: hashedPassword,
//   });
//   res.send(result);
// });

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
