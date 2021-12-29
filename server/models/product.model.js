const mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    name: String,
    food: String,
    price: Number,
    location: String,
    rating: Number,
    feature_image: String,
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Products', productSchema);