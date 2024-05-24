const mongoose = require('mongoose');

const userSCHEMA = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    pseudo: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    role: { type: String, enum: ['admin', 'user'], default: 'user' },
});

const User = mongoose.model('User', userSCHEMA);

module.exports = User;
