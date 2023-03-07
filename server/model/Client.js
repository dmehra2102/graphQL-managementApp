const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
}, {
    timestamps: true,
    versionKey: false
})


module.exports = mongoose.model('Client', ClientSchema);