const mongoose = require('mongoose');

const photoSCHEMA = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    pelliculeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Pellicule', required: true },
    photoURL: { type: String, required: true },
    legende: { type: String, required: false },
    datePublication: { type: Date, default: Date.now }, // Ajout de la date de publication
    userPseudo: { type: String }, // Ajout du pseudo de l'utilisateur
    likesCount: { type: Number, default: 0 }, // Nouveau champ pour compter les likes
    commentsCount: { type: Number, default: 0 } // Nouveau champ pour compter les commentaires

});

// Middleware pour extraire le pseudo de l'utilisateur associé avant la sauvegarde de la photo
photoSCHEMA.pre('save', async function(next) {
    try {
        const user = await User.findById(this.userId);
        if (user) {
            this.userPseudo = user.pseudo; // Stockez le pseudo de l'utilisateur dans le document de la photo
        }
        next();
    } catch (error) {
        next(error);
    }
});
const Photo = mongoose.model('Photo', photoSCHEMA);

module.exports = Photo;
