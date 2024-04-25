const { user } = require('../models');
const bcrypt = require('bcrypt');

const getAllUsers = async (req, res) => {
  try {
    const users = await user.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  //   const result = await user.findAll();
  //   res.status(200).json(result);
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

  const result = await user.create({
    phoneNumber: req.body.phoneNumber,
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  });
  res.send(result);
};

module.exports = {
  getAllUsers,
  register,
  updateUser,
  deleteUser,
};
