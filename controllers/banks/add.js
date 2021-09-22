const { Bank } = require('../../models')

const add = async (req, res) => {
    const data = req.body
    const result = await Bank.create(data)

    res.status(201).json(result)
}

module.exports = add