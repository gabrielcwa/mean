import { mongo } from 'mongoose';

const restful = require('node-restful')
const mongoose = require(restful.mongoose)

const creditSchema = new mongoose.Schema({
    name: { type: String, require: true },
    value: { type: Number, min: 0, require: true}
})

const debtSchema = new mongoose.Schema({
    name: { type: String, require: true },
    value: { type: Number, min: 0, require: true },
    status: { type: String, require: false, uppercase: true,
        enum: ['PAGO', 'PENDENTE', 'AGENDADO'] }
})

const billingCycleSchema= new mongoose.Schema({
    name: { type: String, require: true },
    month: { type: Number, min: 1, max: 12, require: true },
    year: { type: Number, min: 1970, max: 2500, require: true },
    credits: [ creditSchema ],
    debts: [ debtSchema ]
})

module.exports = restful.model('BillingCyle', billingCycleSchema)