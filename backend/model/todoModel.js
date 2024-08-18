const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    task: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('todoTask', TodoSchema);
