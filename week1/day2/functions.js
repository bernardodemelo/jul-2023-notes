// Functions 
// Reusable Pieces of Code designed to perform an action
// Example of the Ice Cream Machine: grabs strawberries, ice, milk 
// and returns a strawberry ice cream.

// Function Declaration - process of writing the function
function sayHello(){ // function as a keyword to refer to it and then the name of the function
    return console.log("Hello, world!");
} 

// Function Invocation - process of activating the function
//sayHello();

// Parameters and Arguments in Functions
function playSong(songName){
    //songName is a parameter - a label to refer to a value
    //"Backstreet Boys" is an argument - the real value
    return console.log(`You chose ${songName}`);
}

playSong("Backstreet Boys");

// Second Example
function playNewSong(numberOfSong, songName){
    return console.log(`Song no.${numberOfSong} is ${songName}`)
}

playNewSong(3, "Blank Space - Taylor Swift");

// Functions and Arrays 
let listOfFruits = ["banana", "kiwi", "papaya"];

function listsFruits(fruits){
    fruits.forEach((fruit)=>{
        return console.log(fruit);
    })
}

listsFruits(listOfFruits);

// Arrays, Loops and Conditionals

let randomWords = ["apple", "lisbon", "Portugal", "Ronaldo"];

function lengthOfWords(words){
    for(let i= 0; i<words.length; i++){
        if(words[i].length > 5){
            console.log("woa, that's a complex word");
        }
        else{
            console.log("just a regular word");
        }
    }
}

lengthOfWords(randomWords);


// Average Function

function sumOfNumbers(numbers){
    let sum = 0; 
    numbers.forEach((number)=>{
        sum = sum + number;
    })
    return sum; 
}

function averageOfNumbers (numbers){
    return console.log(sumOfNumbers(numbers) / numbers.length);
}

averageOfNumbers([2,3,4])