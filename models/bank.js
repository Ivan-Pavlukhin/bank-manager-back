const { Schema, model } = require('mongoose')
const Joi = require('joi')
const { string, number, required } = require('joi')

const bankSchema = Schema({
    name: {
        type: String,
        required: [true, 'Set name for bank']
    },
    percentageRate: {
        type: Number,
        min: 1,
        required: [true, 'Annual percentage rate is required']
    },
    maxLoan: {
        type: Number,
        min: 1,
        required: [true, 'Maximum loan is required']
    },
    minDownPayment: {
        type: Number,
        min: 1,
        required: [true, 'Minimum down payment is required']
    },
    loanTerm: {
        type: Number,
        min: 1,
        default: 1
    }
}, { versionKey: false, timestamps: true })

const joiSchema = Joi.object({
    name: Joi.string().required(),
    percentageRate: Joi.number().min(1).required(),
    maxLoan: Joi.number().min(1).required(),
    minDownPayment: Joi.number().min(1).required(),
    loanTerm: Joi.number().min(1).required()
})

const Bank = model('bank', bankSchema)

module.exports = { Bank, joiSchema }