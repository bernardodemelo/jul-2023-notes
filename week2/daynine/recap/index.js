// RISE AND SHINE RECAP

let colors = ['red', 'blue', 'yellow', 'green', 'orange'];

// I want to RANDOMLY change the background color of the div with the id="random-div" every 2 seconds

// The colors that should appear are the ones that belong to colors array

// You should only use DOM, functions, and async methods.

// SOLUTION: 

function changeColor(){
    // Grab the random Div via its id
    let randomDiv = document.getElementById("random-div");

    // Created a setInterval to change the background color every 2 seconds
    setInterval(()=>{
        // Generates a random index every 2 seconds
        let randomIndex= Math.floor(Math.random() * colors.length);
        // Changes the background color every 2 seconds by addressing a random color from the colors array to the backgroundColor CSS property

        randomDiv.style.backgroundColor = colors[randomIndex];
    }, 500);
}

// Don't forget to call the function!
changeColor()

