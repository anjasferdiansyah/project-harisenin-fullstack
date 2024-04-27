const { userDetail } = require('../models');

const getUserDetail = async (req, res) => {
  try {
    const result = await userDetail.findAll({
      where: {
        user_id: req.user.id,
      },
    });
    res.status(200).json({ data: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createUserDetail = async (req, res) => {
  try {
    const result = await userDetail.create({
      ...req.body,
      user_id: req.user.id,
    });
    res.status(201).json({ data: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUserDetail = async (req, res) => {
  try {
    const result = await userDetail.update(req.body, {
      where: {
        user_id: req.user.id,
      },
    });
    res.status(200).json({ data: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUserDetail = async (req, res) => {
  try {
    const result = await userDetail.destroy({
      where: {
        user_id: req.user.id,
      },
    });
    res.status(200).json({ data: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getUserDetail, createUserDetail, updateUserDetail, deleteUserDetail };
