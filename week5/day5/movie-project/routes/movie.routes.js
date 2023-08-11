const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model');


router.get('/movies', async(req,res)=>{
    try{
        let moviesDB = await Movie.find();
        res.render('movies/movie-list.hbs', {movies:moviesDB});
    }
    catch(error){
        console.log(error);
    }
});