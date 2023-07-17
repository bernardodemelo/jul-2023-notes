// Scope 
// Variable Scope defines the region where a variable can be accessed
// Global Scope, Functional Scope, Block Scope

// Global Scope 
// Variables that are not declared inside a function or a loop / conditional belong to the global Scope
// that is: they can be accessed anywhere in the code. 

// Example
/*
let counter = 0;

function countToFive(number){
    for (let i = 0; i<=5; i++){
       number = i;
       console.log(number);
    }
}

countToFive(counter);
*/
// Functional Scope
// Variables that were declared inside a function can only be accessed inside the function where they were declared.

// Example 
/*
function sayHello(){
    let welcome = "Hello, fastest man alive!";
    console.log(welcome);
}

console.log(welcome);
*/
// Block Scope
// Variables that were declared inside a JS Block (loops / conditionals) can't be accessed outside those blocks.
/*
function sayGoodbye(){
    for (let i = 0; i<3; i++){
        console.log(i);
        console.log("Goodbye");
    }
}

sayGoodbye();
*/
// Hoisting 
// Hoisting is a JS mechanism where JS variable and function declarations are put on top of the JS file

// Var Example (<ES6)
message = 'Hello, people!';

console.log(message);

var message; 

// Let Example -- does not work
/*
message = 'Hello, people!';

console.log(message);

let message; 
*/

// Functional Hoisting
sayHello("Hello, ironhackers!");

function sayHello(message){
    return console.log(message);
}

// Shadowing 
// You can declare variables with the same name, if they belong to different scopes

let number1 = 1; 
let number2 = 2;

function shadowing(){
    let number1 = 3; 
    let number2 = 4;

    console.log(number1, number2);
}

shadowing();
console.log(number1, number2);
