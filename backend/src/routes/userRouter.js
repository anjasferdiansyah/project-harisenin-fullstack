const express = require('express');
const {
  getAllUsers,
  register,
  updateUser,
  deleteUser,
  login,
} = require('../controllers/userController');
const { verify } = require('../middlewares/verifyToken');

const router = express.Router();

router.get('/', verify, getAllUsers);
router.post('/register', register);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);
router.post('/login', login);

module.exports = router;
