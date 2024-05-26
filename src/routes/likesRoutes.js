const express = require('express');
const router = express.Router();
const likesController = require('../controllers//likesControllers');

// Route pour la création d'un nouveau like
router.post('/create', likesController.createLike);

// Route pour la récupération de tous les likes
router.get('/', likesController.getAllLikes);

// Route pour la suppression d'un like
router.delete('/:id', likesController.deleteLike);

// Route pour récupérer les photos par pelliculeId
router.get('/photo/:photoId', likesController.getLikesByPhotoId);


// Route pour récupérer les likes d'une photo spécifique
router.get('/photo/:photoId/likes', async (req, res) => {
    try {
      const likes = await Like.find({ photoId: req.params.photoId }).populate('userId', 'pseudo');
      res.json(likes);
    } catch (error) {
      console.error('Error fetching likes:', error);
      res.status(500).json({ error: 'An error occurred while fetching likes' });
    }
  });
  
  module.exports = router;
