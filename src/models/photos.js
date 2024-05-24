const mongoose = require('mongoose');

const photoSCHEMA = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    pelliculeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Pellicule', required: true },
    photoURL: { type: String, required: true },
    legende: { type: String, required: false },
    datePublication: { type: Date, default: Date.now } // Ajout de la date de publication
});

const Photo = mongoose.model('Photo', photoSCHEMA);

module.exports = Photo;
