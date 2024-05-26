const express = require('express');
const router = express.Router();
const photoController = require('../controllers/photosControllers');

// Route pour créer une nouvelle photo
router.post('/create', photoController.createPhoto);

// Route pour récupérer toutes les photos
router.get('/', photoController.getAllPhotos);

// Route pour récupérer les détails d'une photo par son identifiant
<<<<<<< HEAD
router.get('/details/:id', photoController.getPhotoById); // Correction ici
=======
router.get('/details/:id', photoController.getPhotoDetailsById);
>>>>>>> aea8a217ed9d14697ec6f1b6aed657f2341e5c60

// Route pour mettre à jour une photo par son identifiant
router.put('/:id', photoController.updatePhoto);

// Route pour supprimer une photo par son identifiant
router.delete('/:id', photoController.deletePhoto);

// Route pour récupérer les photos par pelliculeId
router.get('/pellicule/:pelliculeId', photoController.getPhotosByPellicule);

module.exports = router;
