// Numbers

// Integers (doesn't have decimal cases)
let age = 34; 

// Floats (have decimal cases)
const price = 12.99;

let myName = "Miguel"; 
myName = "Miguel"/2; 
//console.log(myName);

// Operators 

// Sum 
//console.log(2+2);

// Subtraction
//console.log(4-2);

// Multiplication
//console.log(2*2); 

// Division
//console.log(10/2);

// Advanced Operators 

// Exponentiation 
//console.log(2**5);

//Modulo gives us the info if there's remainder on  the division or not.
//console.log(4%2);
//console.log(10%3);
//console.log(10%10);

// Assignment Operator (Sum)

let myFavNumber = 3; 
//myFavNumber = 3 + 1; 
myFavNumber += 1;
//console.log(myFavNumber);

// Rounding with JavaScript
let pi = 3.14; 

// Rounding to the bottom number
pi = Math.floor(pi); 
//console.log(pi);

// Rounding to the top number
let anotherPi = 3.14;
anotherPi = Math.ceil(anotherPi);
//console.log(anotherPi);

// Round to the closest number
let bananaPrice = 3.99; 
bananaPrice = Math.round(bananaPrice);
//console.log(bananaPrice);

// Random Numbers
//console.log(Math.random());

// Random Number between 1 - 10; 
//console.log((Math.random() * 10) + 1);

// Random Integers between 1 - 10
//console.log(Math.floor((Math.random()*10) + 1));

// Strings
// Sequence of characters. 
// Character can be a letter, a number or ponctuation. 
// You need quotes to create it. 

let favouriteSinger = "Hannah Montana";
favouriteSinger = 'Hannah Montana';

let mySecondName = 'Bernardo'; 

console.log(`Hello there, ${mySecondName}`);

// New Lines only with backticks
let fruits = `1. Kiwi
2. Papaya
3. Blueberry
4. Banana 
5. Apple`

//console.log(fruits);

// Calcule the Length (number of characters) of a String
let longestWord = "pneumonoultramicroscopicsilicovolcanoconiosis"; 
//console.log(longestWord.length);

// Add Strings together
let helloIronhacker = "Hello Ironhacker, my name is "; 
let ironhackerName = "Bruno Rocha";

//console.log(helloIronhacker + ironhackerName);

// Cities Sort Alphabetically 

console.log('porto'.localeCompare('algarve'));

console.log(ironhackerName.localeCompare(helloIronhacker));

const breakingFree = "We're soarin', flyin'. There's not a star in heaven that we can't reach"; 

console.log(breakingFree.includes("a star"));
console.log(breakingFree.includes("Marcelo Rebelo de Sousa"));

// Booleans
// Can result either in the value of true or false

let myFirstBoolean = false; 
console.log(typeof myFirstBoolean);

// Boolean Logic Operators

// || - OR Operator : returns true if one of the expressions is true
//sconsole.log(4>2 || 1>100000);

// && - AND Operator : returns true only if all the expressions are true
//console.log(4>2 && 1>100000);
//console.log(4>2 && 1<100000);

// NOT Operator 
console.log(!true);

// Undefined - stands for stored, but not defined values
let ironhack; 
console.log(ironhack);

// Null stands for not defined and not stored values