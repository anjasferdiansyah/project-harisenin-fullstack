const express = require('express');
const {
  getAllUsers,
  register,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

const router = express.Router();

router.get('/', getAllUsers);
router.post('/register', register);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
