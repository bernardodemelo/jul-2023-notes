const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model');

// Require fileUploader middleware from Cloudinary Configurations
const fileUploader = require('../config/cloudinary.config');


router.get('/movies', async(req,res)=>{
    try{
        let moviesDB = await Movie.find();
        res.render('movies/movie-list.hbs', {movies:moviesDB});
    }
    catch(error){
        console.log(error);
    }
});

router.get('/movies/create', (req,res)=>{
    res.render('movies/movie-create.hbs');
});

router.post('/movies/create', fileUploader.single('movie-cover-image'), async(req,res)=>{
    const {title, description} = req.body;
    try{
        await Movie.create({title, description, imageUrl: req.file.path});
        res.redirect('/movies');
    }

    catch(error){
        console.log(error);
    }
});

router.get('/movies/:id/edit', async (req,res)=>{
    const {id} = req.params;

        try{
            let foundMovie = await Movie.findById(id);
            res.render('movies/movie-edit', foundMovie);
        }
        catch(error){
            console.log(error);
        }
    });

// POST Route to save the updated data
router.post('/movies/:id/edit', fileUploader.single('movie-cover-image'), async (req,res) =>{
    const {id} = req.params; 
    const {title, description, existingImage} = req.body;

    let imageUrl;

    // If there's a new image to be uploaded ... 
    if(req.file){
        // ... then our imageUrl is going to be the same as the one that was uploaded
        imageUrl = req.file.path;
    } else {
        // ... else, just use the previous one
        imageUrl = existingImage;
    }
    
    try{
        let foundMovie = await Movie.findByIdAndUpdate(id, {title, description, imageUrl}, {new: true});
        res.redirect('/movies');
    }
    catch(error){
        console.log(error);
    }
    });

module.exports = router;