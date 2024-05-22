const Photo = require('../models/photos');

// Contrôleur pour la création d'une nouvelle photo
exports.createPhoto = async (req, res) => {
    try {
        // Créer une nouvelle instance de photo avec les données du corps de la requête
        const nouvellePhoto = new Photo(req.body);
        
        // Sauvegarder la nouvelle photo dans la base de données
        await nouvellePhoto.save();
        
        // Répondre avec la photo créée
        res.status(201).json(nouvellePhoto);
    } catch (error) {
        // En cas d'erreur, répondre avec un message d'erreur et un code d'erreur appropriés
        res.status(500).json({ message: error.message });
    }
};

// Contrôleur pour la récupération de toutes les photos
exports.getAllPhotos = async (req, res) => {
    try {
        // Récupérer toutes les photos depuis la base de données
        const photos = await Photo.find();
        
        // Répondre avec la liste des photos
        res.status(200).json(photos);
    } catch (error) {
        // En cas d'erreur, répondre avec un message d'erreur et un code d'erreur appropriés
        res.status(500).json({ message: error.message });
    }
};

// Contrôleur pour la récupération d'une photo par son identifiant
exports.getPhotoById = async (req, res) => {
    try {
        // Récupérer la photo avec l'identifiant spécifié depuis la base de données
        const photo = await Photo.findById(req.params.id);
        
        // Vérifier si la photo existe
        if (!photo) {
            return res.status(404).json({ message: "Photo not found" });
        }
        
        // Répondre avec la photo récupérée
        res.status(200).json(photo);
    } catch (error) {
        // En cas d'erreur, répondre avec un message d'erreur et un code d'erreur appropriés
        res.status(500).json({ message: error.message });
    }
};

// Contrôleur pour la mise à jour des informations d'une photo
exports.updatePhoto = async (req, res) => {
    try {
        // Mettre à jour la photo avec l'identifiant spécifié en utilisant les données du corps de la requête
        const photo = await Photo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        
        // Vérifier si la photo existe
        if (!photo) {
            return res.status(404).json({ message: "Photo not found" });
        }
        
        // Répondre avec la photo mise à jour
        res.status(200).json(photo);
    } catch (error) {
        // En cas d'erreur, répondre avec un message d'erreur et un code d'erreur appropriés
        res.status(500).json({ message: error.message });
    }
};

// Contrôleur pour la suppression d'une photo
exports.deletePhoto = async (req, res) => {
    try {
        // Supprimer la photo avec l'identifiant spécifié depuis la base de données
        const photo = await Photo.findByIdAndDelete(req.params.id);
        
        // Vérifier si la photo existe
        if (!photo) {
            return res.status(404).json({ message: "Photo not found" });
        }
        
        // Répondre avec un message de succès
        res.status(200).json({ message: "Photo deleted successfully" });
    } catch (error) {
        // En cas d'erreur, répondre avec un message d'erreur et un code d'erreur appropriés
        res.status(500).json({ message: error.message });
    }
};
