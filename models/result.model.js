const mongoose = require('mongoose');

const ResultSchema = mongoose.Schema({
    id: String,
    results: Object
}, {
    timestamps: true
});

module.exports = mongoose.model('Result', ResultSchema);