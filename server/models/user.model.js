const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: String,
    phone: String,
    profession: String,
    email: String,  
    password: String,
    confirmPassword: String,
    acceptTerms: Boolean,
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Users', userSchema);