const mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
    food: String,
    price: Number,
    foodId: String,
    userId: String,
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Orders', orderSchema);