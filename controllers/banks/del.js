const { NotFound } = require('http-errors')

const { Bank } = require('../../models')

const del = async (req, res) => {
    const { id } = req.params
    const removeBank = await Bank.findOneAndRemove({_id: id})
    if(!removeBank){
        throw new NotFound()
    }
    res.json({ message: 'bank deleted', removeBank })
}

module.exports = del