const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, enum: ['Not Started', 'In Progress', 'Completed'] },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    }
}, {
    timestamps: true,
    versionKey: false
})


module.exports = mongoose.model('Project', ProjectSchema);