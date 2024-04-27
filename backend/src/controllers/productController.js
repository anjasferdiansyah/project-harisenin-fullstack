const { Product } = require('../models')

exports.getAllProcuts = async (req, res) => {
    try {
        const products = await Product.findAll()
        res.json(products)
    } catch (err){
        console.error(err)
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

// exports.getProductById = async (req, res) => {
//     const id = req.params.id;
//     try {
//         const product = await Product.findByPk(id)
//         res.json(product)
//         if(!product) {
//             return res.status(404).json({ message: 'Product not found'})
//         }
//         res.json(product)
//     } catch (err) {
//         console.error(err);
//         res.status(500).json( { message: 'Internal Server Error' })
//     }
// }

exports.createProduct = async (req, res) => {
    const { title, price, listImage, desc, catId, rating_rate, rating_count } = req.body

    try {
        const product = await Product.create({ title, price, listImage, desc, catId, rating_rate, rating_count })
        res.status(201).json(product)
    } catch(err){
        console.error(err)
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

exports.deleteProductById = async (req, res) => {
    const id = req.params.id;
    try {
        const product = await Product.destroy({ where: { id } })
        res.json(product)
        if(!product) {
            return res.status(404).json({ message: 'Product not found'})
        }
        res.json(product)
    } catch (err) {
        console.error(err);
        res.status(500).json( { message: 'Internal Server Error' })
    }
}

exports.updateProduct = async (req, res) => {
    const id = req.params.id;
    const { title, price, listImage, desc, catId, rating_rate, rating_count } = req.body
    try {
        const product = await Product.update({ title, price, listImage, desc, catId, rating_rate, rating_count }, { where: { id } })
        res.json(product)
        if(!product) {
            return res.status(404).json({ message: 'Product not found'})
        }
        res.json(product)
    } catch (err) {
        console.error(err);
        res.status(500).json( { message: 'Internal Server Error' })
    }
}