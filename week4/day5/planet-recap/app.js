// Require Packages
const mongoose = require("mongoose");
const express = require("express");
const hbs = require ("hbs");

// Require Model
const Planet = require('./models/Planet.js');

// Import Data from JS File
let planets = require("./utils/planets.js"); 

// Mongoose Configuration
mongoose.connect('mongodb://127.0.0.1/planets-recap')
.then(info => console.log('Database Connected'))
.catch(err => console.error('Error', err));

// Create an Express Server that handles requests and responses
const app = express();

// Set HBS as View Engine
app.set("view engine", "hbs");

// Point to Views Directory
app.set("views", __dirname + "/views");

// Make Public Static Files Available
app.use(express.static('public'));

// Home Page with Index
app.get("/", async (req,res)=>{
    res.render("index");
});

// Button to Get Planets - DO NOT TOUCH THIS ROUTE
app.post("/create-planets", async (req,res)=>{
   for (let i = 0; i < planets.length; i++){
    const {name} = planets[i];
    let verifyPlanet = await Planet.find({name: name}); 
    if(!verifyPlanet.length){
        Planet.create(planets[i]);  
    }
   }
   res.redirect('/');
});

// Button to Delete All Planets - DO NOT TOUCH THIS ROUTE
app.post("/delete-planets", async (req,res)=>{
    await Planet.deleteMany({});
    res.redirect('/');

});

// Planets List Page - Your Code Goes inside this Route
app.get("/list-planets", async (req,res)=>{
    let planetsDb = await Planet.find();
    res.render('list-planets', {planets: planetsDb}); 
});


// Listen in PORT 3000
app.listen(3000);