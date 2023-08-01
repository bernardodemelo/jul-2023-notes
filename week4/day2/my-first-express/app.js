// Require Express
const express = require('express');

// Creates an Express App that handles requests and responses
const app = express();

// Make everything inside directory public available
app.use(express.static('public'));

// Create routes
app.get('/home', (req,res)=>{
    res.sendFile(__dirname + "/views/home.html");
});

app.get('/dog', (req,res)=>{
    res.sendFile(__dirname + "/views/dog.html");
});

// Start the Server
app.listen(3000, ()=> console.log("Listening on PORT 3000"));