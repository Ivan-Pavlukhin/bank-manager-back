const { NotFound, BadRequest } = require('http-errors')

const { Bank } = require('../../models')

const update = async (req, res) => {
    const { id } = req.params
    const { body } = req
    if (!body) {
        throw new BadRequest('missing fields')
    }
    const updateBank = await Bank.findByIdAndUpdate({ _id: id }, body, { new: true })
    if (!updateBank) {
        throw new NotFound()
    }
    res.json( updateBank )
}

module.exports = update