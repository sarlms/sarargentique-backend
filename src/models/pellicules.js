
const mongoose = require('mongoose');

const pelliculeSCHEMA = new mongoose.Schema({
    nom : {type : String, required: true},
    description : {type : String, required : false},
});

const Pellicule = mongoose.model('Pellicule', pelliculeSCHEMA);

module.exports = Pellicule;