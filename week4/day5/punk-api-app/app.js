// Express
const express = require('express');
const app = express();

// HBS
const hbs = require('hbs');

// Set View Engine as HBS
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

// Make Public Static Files Available
app.use(express.static('public'));

// Punk Api Configuration
const PunkApiWrapper = require('punkapi-javascript-wrapper');
const punkApi = new PunkApiWrapper();

// Get Route that Displays a SearchBar
app.get('/', (req,res)=>{
    res.render('index');
});

// Get Route that Finds and Returns all Beers with Query String Name
app.get('/searched-beer', async(req,res)=>{
    try{
    // Object Destructuring
    // same as const beer = req.query.beer;
    const {beer} = req.query;

    // get all beers from Punk Api with the same name as the searched one
    let allSearchedBeers = await punkApi.getBeers({'beer_name':beer});

    res.render('searched-beers', {beers: allSearchedBeers});
    }
    catch(error){
        console.log(error);
    }
});

// Return detailed info about a specific Beer
app.get('/beer/:beerId', async (req,res)=>{
    try{
    const {beerId} = req.params;
    let searchedBeer = await punkApi.getBeer(beerId);
    res.render('beer', searchedBeer[0]);
    }
    catch(error){
        console.log(error);
    }
})

// Server listening on PORT 3000
app.listen(3000);
