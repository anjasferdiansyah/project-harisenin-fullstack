const { user } = require('../models');
const { userDetail } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');

const getAllUsers = async (req, res) => {
  try {
    const users = await user.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 10);

  const result = await user.update(
    {
      phoneNumber: req.body.phoneNumber,
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  res.send(result);
};

const deleteUser = async (req, res) => {
  const userId = parseInt(req.params.id);
  const result = await user.destroy({
    where: {
      id: userId,
    },
  });
  res.status(200).json({ message: 'User deleted successfully' });
};

const register = async (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 10);

  try {
    const newUser = user.create(
      {
        phoneNumber: req.body.phoneNumber,
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
        userDetail: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          address: req.body.address,
          gender: req.body.gender,
        },
      },
      {
        include: [userDetail],
      }
    );

    res
      .status(201)
      .json({ message: 'User created successfully', data: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// login user controller
const login = async (req, res) => {
  try {
    const getUser = await user.findOne({
      where: {
        email: req.body.email,
      },
      include: [userDetail],
    });

    console.log(getUser);
    if (!getUser) {
      res.status(404).json({ message: 'User not found' });
    }

    const comparedPassword = bcrypt.compareSync(
      req.body.password,
      getUser.password
    );

    if (!comparedPassword) {
      res.status(401).json({ message: 'Wrong password' });
    }

    const token = jwt.sign(
      {
        id: getUser.id,
        email: getUser.email,
        username: getUser.username,
        firstName: getUser.userDetail.firstName,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '1d',
      }
    );

    return res.status(200).send({ message: 'Login successful', token: token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// end of user controllers

const searchUser = async (req, res) => {
  const result = await user.findAll({
    where: {
      [Op.or]: [{ username: { [Op.like]: `%${req.query.q}%` } }],
    },
  });
  res.send(result);
};

module.exports = {
  getAllUsers,
  register,
  updateUser,
  deleteUser,
  login,
  searchUser,
};
