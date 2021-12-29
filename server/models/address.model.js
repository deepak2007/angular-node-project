const mongoose = require('mongoose');

var addressSchema = new mongoose.Schema({
    name: String,
    location: String,
    userId: String,
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Address', addressSchema);