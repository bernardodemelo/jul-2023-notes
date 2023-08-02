// We have express functionalities with us
const express = require("express");

// Create an express server that handles requests and responses
const app = express();

// Create a Path that points to folder of views
app.set("views", __dirname + "/views");

// Set handlebars (hbs) as a view engine
app.set("view engine", "hbs");

// Create Routes
app.get("/", (req,res)=>{
    let data = {
        name: "Bernardo",
        favouriteColor: "blue",
        favouriteFood: "<b>Leitão da Mealhada</b>",
        bootcamp: "Web Development", 
        favouriteCities: ["Lisbon", "Wienn", "Salvador"],
        favouriteMusicGenre: {
            name: "Thrash Metal", 
            favouriteBand: "Slayer"
        }
    }

    res.render("index", data);
});

// Create another Route "/favourite" that has a JS object with data from one of your idols

// The object must have 3 properties: name, age, favouriteQuote

app.get("/favourite", (req,res)=>{
    let idolObject = {
        name: "BigManNick", 
        age: 59, 
        favouriteQuote: "<h3>Favourite Quote here</h3>"
    }

    res.render("idol", idolObject);
})

// Render the JS Object with a Handlebars file called "idol.hbs"

// Print the information with the html tags that you chose

// Make our Express Server listen to changes in PORT 3000
app.listen(3000, ()=> console.log("listening in 3000"));

// By that, if we want to access it via the browser, we'll have to search for 'localhost:3000'


