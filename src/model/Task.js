const mongoose = require('../db/index');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('Task', TaskSchema);