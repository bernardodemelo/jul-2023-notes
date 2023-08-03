// Require Packages
const express = require("express");
const hbs = require ("hbs");
const DogApi = require('doggo-api-wrapper');

// Create an Express Server that handles requests and responses
const app = express();

// Initiate new API Wrapper
const myDog = new DogApi();

// Set HBS as View Engine
app.set("view engine", "hbs");

// Point to Views Directory
app.set("views", __dirname + "/views");

// Make Public Static Files Available
app.use(express.static('public'));

// Create Routes
app.get("/", async (req,res)=>{
    let dogImage = await myDog.getMultipleRandomDogs(5); 
    res.render("all-breeds", dogImage)
});

app.get("/schnauzer", async (req,res)=>{
    let schnauzerImage = await myDog.getARandomSubBreedImage('schnauzer', 'miniature'); 
    res.render("schnauzer", schnauzerImage)
});

// Listen in PORT 3000
app.listen(3000);
