const express = require('express');
const router = express.Router();
const photoController = require('../controllers/photosControllers');

// Route pour créer une nouvelle photo
router.post('/create', photoController.createPhoto);

// Route pour récupérer toutes les photos
router.get('/', photoController.getAllPhotos);

// Route pour récupérer une photo par son identifiant
router.get('/:id', photoController.getPhotoById);

// Route pour mettre à jour une photo par son identifiant
router.put('/:id', photoController.updatePhoto);

// Route pour supprimer une photo par son identifiant
router.delete('/:id', photoController.deletePhoto);

// Route pour récupérer les photos par pelliculeId
router.get('/pellicule/:pelliculeId', photoController.getPhotosByPelliculeId);

module.exports = router;
