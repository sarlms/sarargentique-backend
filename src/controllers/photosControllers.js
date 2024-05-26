const Photo = require('../models/photos');
<<<<<<< HEAD
const Like = require('../models/likes'); // Assurez-vous d'importer le modèle Like
const Commentaire = require('../models/commentaires'); // Assurez-vous d'importer le modèle Commentaire
=======
const Like = require('../models/likes');
const Commentaire = require('../models/commentaires');
>>>>>>> aea8a217ed9d14697ec6f1b6aed657f2341e5c60

// Contrôleur pour la création d'une nouvelle photo
exports.createPhoto = async (req, res) => {
    try {
        const nouvellePhoto = new Photo({
            ...req.body,
            createdAt: new Date()
        });
        
        await nouvellePhoto.save();
        
        res.status(201).json(nouvellePhoto);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Contrôleur pour la récupération de toutes les photos
exports.getAllPhotos = async (req, res) => {
    try {
        const photos = await Photo.find();
        
        for (const photo of photos) {
            photo.likesCount = await Like.countDocuments({ photoId: photo._id });
            photo.commentsCount = await Commentaire.countDocuments({ photoId: photo._id });
        }

        res.status(200).json(photos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Contrôleur pour récupérer les détails d'une photo par son identifiant
exports.getPhotoDetailsById = async (req, res) => {
    try {
<<<<<<< HEAD
=======
        // Récupérer les détails de la photo avec l'identifiant spécifié depuis la base de données
>>>>>>> aea8a217ed9d14697ec6f1b6aed657f2341e5c60
        const photo = await Photo.findById(req.params.id);
        
        if (!photo) {
            return res.status(404).json({ message: "Photo not found" });
        }

        photo.likesCount = await Like.countDocuments({ photoId: photo._id });
        photo.commentsCount = await Commentaire.countDocuments({ photoId: photo._id });
        
<<<<<<< HEAD
=======
        // Répondre avec les détails de la photo récupérée
>>>>>>> aea8a217ed9d14697ec6f1b6aed657f2341e5c60
        res.status(200).json(photo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Contrôleur pour la mise à jour des informations d'une photo
exports.updatePhoto = async (req, res) => {
    try {
        const photo = await Photo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        
        if (!photo) {
            return res.status(404).json({ message: "Photo not found" });
        }
        
        res.status(200).json(photo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Contrôleur pour la suppression d'une photo
exports.deletePhoto = async (req, res) => {
    try {
        const photo = await Photo.findByIdAndDelete(req.params.id);
        
        if (!photo) {
            return res.status(404).json({ message: "Photo not found" });
        }
        
        res.status(200).json({ message: "Photo deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Contrôleur pour récupérer les photos par pelliculeId
exports.getPhotosByPellicule = async (req, res) => {
    try {
        const { pelliculeId } = req.params;
        const photos = await Photo.find({ pelliculeId }).lean();

        for (const photo of photos) {
<<<<<<< HEAD
            photo.likesCount = await Like.countDocuments({ photoId: photo._id });
            photo.commentsCount = await Commentaire.countDocuments({ photoId: photo._id });
=======
            const likesCount = await Like.countDocuments({ photoId: photo._id });
            const commentsCount = await Commentaire.countDocuments({ photoId: photo._id });
            photo.likesCount = likesCount;
            photo.commentsCount = commentsCount;
>>>>>>> aea8a217ed9d14697ec6f1b6aed657f2341e5c60
        }

        res.status(200).json(photos);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching photos', error });
    }
};
