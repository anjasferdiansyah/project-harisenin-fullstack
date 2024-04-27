const { products } = require('../models');

exports.getAllProducts = async (req, res) => {
  try {
    const result = await products.findAll();
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.getProductById = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await products.findByPk(id);
    if (!result) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.createProduct = async (req, res) => {
  const { title, price, listImage, desc, catId, rating_rate, rating_count } =
    req.body;

  try {
    const result = await products.create({
      title,
      price,
      listImage,
      desc,
      catId,
      rating_rate,
      rating_count,
    });
    res.status(201).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.deleteProductById = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await products.destroy({ where: { id } });
    if (!result) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  const { title, price, listImage, desc, catId, rating_rate, rating_count } =
    req.body;
  try {
    const result = await products.update(
      { title, price, listImage, desc, catId, rating_rate, rating_count },
      { where: { id } }
    );
    if (!result) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
