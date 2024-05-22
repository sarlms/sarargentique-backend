const mongoose = require('mongoose');

const userSCHEMA = new mongoose.Schema({
    email : {type : String, required: true},
    pseudo : {type : String, required: true},
    password : {type : String, required : true},
    nom : {type : String, required : true},
    prenom : {type : String, required : true},
});

const User = mongoose.model('User', userSCHEMA);

module.exports = User;