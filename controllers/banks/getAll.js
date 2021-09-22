const { NotFound } = require('http-errors')

const { Bank } = require('../../models')

const getAll = async (req, res) => {
    const banks = await Bank.find({})
    if(!banks.length){
        throw new NotFound()
    }
    res.json(banks)
}

module.exports = getAll