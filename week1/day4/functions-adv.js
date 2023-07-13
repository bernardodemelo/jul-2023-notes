// Functions
// Created to perform an action

// Function Declaration
/*
function iceCreamMachine(ingredients){
    if(ingredients){
        return console.log("Ice Cream!");
    }
}

// Function Invocation
iceCreamMachine(["sugar", "milk", "chocolate", "ice" ])
*/ 

// Functions, in JS, are first-class citizens

// Function Expression 
let iceCreamMachine = function (ingredients) {
    if(ingredients){
        return console.log("Ice Cream!");
    }
}

iceCreamMachine(["sugar", "milk", "chocolate", "ice" ])

// Second Example with Function Expression

// Function Declaration
function printName(name, func1, func2) {
    func1(name);
    func2(name);
}

// Call the Function 
printName('portugal', function(name1){
    return console.log(name1.toUpperCase());
}, function(name2) {
    return console.log(`hello ${name2}!`)
});

// Second Example 

let myActor = "Nicolas Cage";

function callBigManNick(param1, param2) {
    param2(param1);

    // function (nameActor = param1 = myActor = "Nicolas Cage") {
    // return console.log(nameActor);
    // }
}

callBigManNick(myActor, function(pitagoras){
    return console.log(pitagoras)
})

// Arrow Functions 
// ES6

let welcomeMessage = (message) => {
    return console.log(message);
}

welcomeMessage("Hello, fastest man alive");
