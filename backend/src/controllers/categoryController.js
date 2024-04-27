const { categories } = require('../models')

exports.getAllCategories = async (req, res) => {
    try {
        const result = await categories.findAll()
        res.json(result)
    } catch (err){
        console.error(err)
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

exports.getCategoryById = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await categories.findByPk(id)
        if(!result) {
            return res.status(404).json({ message: 'Category not found'})
        }
        res.json(result)
    } catch (err) {
        console.error(err);
        res.status(500).json( { message: 'Internal Server Error' })
    }
}

exports.createCategory = async (req, res) => {
    const { title, image, description } = req.body
    try {
        const result = await categories.create({ title, image, description })
        res.status(201).json(result)
    } catch(err){
        console.error(err)
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

exports.deleteCategoryById = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await categories.destroy({ where: { id } })
        if(!result) {
            return res.status(404).json({ message: 'Category not found'})
        }
        res.json(result)
    } catch (err) {
        console.error(err);
        res.status(500).json( { message: 'Internal Server Error' })
    }
}

exports.updateCategory = async (req, res) => {
    const id = req.params.id;
    const { title, image, description } = req.body
    try {
        const result = await categories.update({ title, image, description }, { where: { id } })
        if(!result) {
            return res.status(404).json({ message: 'Category not found'})
        }
        res.json(result)
    } catch (err) {
        console.error(err);
        res.status(500).json( { message: 'Internal Server Error' })
    }
}