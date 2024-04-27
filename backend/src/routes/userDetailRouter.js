const express = require('express');
const { verify } = require('../middlewares/verifyToken');
const {
  getUserDetail,
  createUserDetail,
  updateUserDetail,
  deleteUserDetail,
} = require('../controllers/userDetailController');

const router = express.Router();

router.get('/', verify, getUserDetail);
router.post('/create', verify, createUserDetail);
router.patch('/:id', verify, updateUserDetail);
router.delete('/:id', verify, deleteUserDetail);

module.exports = router;
