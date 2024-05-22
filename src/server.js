const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


const commentaireRoutes = require('./routes/commentairesRoutes');
const likeRoutes = require('./routes/likesRoutes');
const pelliculeRoutes = require('./routes/pelliculesRoutes');
const photoRoutes = require('./routes/photosRoutes');
const userRoutes = require('./routes/usersRoutes');

const app = express();

app.use(cors());
app.use(express.json());


// start the server

app.get('/', (req, res) => {
    res.send('♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡');
});

app.use('/api/commentaire', commentaireRoutes);
app.use('/api/like', likeRoutes);
app.use('/api/pellicule', pelliculeRoutes);
app.use('/api/photo', photoRoutes);
app.use('/api/user', userRoutes);


// check if MONGO_URI is defined 
if (!process.env.MONGO_URI) { 
    console.error("MONGOURL must be defined"); process.exit(1); 
}


mongoose
    .connect(process.env.MONGO_URI) 
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('server is running on PORT', process.env.PORT);
        });
    }) 
    .catch((err) => {
        console.error('Could not connect to MongoDB...', err);
    });
