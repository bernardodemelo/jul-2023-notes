// Make sure we have the JS file with us
console.log("JS is ready!");

// document.getElementById();
// grabs a HTML element via its id; 
let nicDiv = document.getElementById("nicolas-cage");


// innerHTML = "string" --> creates or changes the text that is inside a HTML element
nicDiv.innerHTML = "I'm a bad actor";


// How to change the style
nicDiv.style.backgroundColor = "orange";
nicDiv.style.color = "white";


// document.getElementsByClassName();
// grabs all the HTML elements via class; 
// returns an Array-like Object
let miniCharmanders = document.getElementsByClassName("charmander");

console.log(miniCharmanders);

// Convert miniCharmanders to an Array (via spread operator)
miniCharmanders = [...miniCharmanders];

// Iterate over each elements of your array and console.log each one of them
miniCharmanders.forEach(element => {
    console.log(element);
});

// document.getElementsByTagName()
// grabs all the documents via its tag
let allDivs = document.getElementsByTagName('div');

// change HTML attributes
nicDiv.className = "nicolas-class";

// querySelector() --> searches via CSS selectors
// Example with id
let queriedDiv = document.querySelector('#nicolas-cage');

queriedDiv.innerHTML = "Changed my ideas, he deserves respect.";

// Example with class
// Returns only the first class found with the searched class name

let oneCharmander = document.querySelector('.charmander');

oneCharmander.innerHTML="helloo";

// querySelectorAll()

let multipleCharmanders = document.querySelectorAll('.charmander');

// no need to convert to an array via spread operator
multipleCharmanders.forEach((pokemon)=>{
    pokemon.innerHTML = "fireee";
})

// .getAttribute() returns the HTML attribute that you want
let nicId = nicDiv.getAttribute('id');

// .setAttribute() changes the attribute (1st value to insert) with the value that you want (2nd value to insert)
nicDiv.setAttribute('id', 'bad-actor');

// .removeAttribute() removes the attribute that you want
nicDiv.removeAttribute('id');

// create HTML elements
// 3 Steps: 
// Create the real HTML element
// Optional: create the content that goes inside it; 
// append it to a parent element

let h2Tag = document.createElement('h2');
h2Tag.innerHTML = "Michael Scott";

let parentElement = document.getElementsByTagName('body');

parentElement[0].appendChild(h2Tag);

let h1Tag = document.getElementById("cat");
parentElement[0].insertBefore(h2Tag, h1Tag);

// Events - stuff that happen to HTML elements / HTML document
// First Example
window.addEventListener('load', ()=>{
    console.log("Good Morning!");
})

// Second Example
let button = document.getElementById('click-button');

button.onclick = function(){
    window.alert('Hello!')
}







