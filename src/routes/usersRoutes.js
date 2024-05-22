const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersControllers');

// Route pour la création d'un nouvel utilisateur
router.post('/create', userController.createUser);

// Route pour la récupération de tous les utilisateurs
router.get('/', userController.getAllUsers);

// Route pour la récupération d'un utilisateur par son identifiant
router.get('/:id', userController.getUserById);

// Route pour la mise à jour des informations d'un utilisateur
router.put('/:id', userController.updateUser);

// Route pour la suppression d'un utilisateur
router.delete('/:id', userController.deleteUser);

module.exports = router;
