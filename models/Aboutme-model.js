const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Aboutme = new Schema(
    {
        name: { type: String, required: true },
        height: { type: String, required: true },
        weight: { type: String, required: true },
        birthday: { type: Date, required: true },
        gender: { type: String, required: true },
        phone: { type: String, required: true },
        mail: { type: String, required: true },
    },
    { timestamps: true },
)
module.exports = mongoose.model('aboutmes', Aboutme)