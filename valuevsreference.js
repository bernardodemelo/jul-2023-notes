let price1 = 20.99;
let price2 = 20.99; 

//console.log(price1 ===  price2);

let price3 = price1; 

//console.log(price3);

price3 = 40;

// console.log(price1);
// console.log(price3);

// Objects
let pokemon1 = {
    name: 'Crobat'
}

let pokemon2 = pokemon1;
let pokemon3 = pokemon2;

//console.log(pokemon1);
//console.log(pokemon2);

// pokemon1.name="Pikachu";
// pokemon3.name= "web dev";

// console.log(pokemon1);
// console.log(pokemon2);
// console.log(pokemon3);

// Duplicate two independent Object Variables

let pokemon4 = JSON.parse(JSON.stringify(pokemon1));
// console.log(pokemon1);
// console.log(pokemon4);

pokemon4.name="Psyduck";

console.log(pokemon1);
console.log(pokemon4);

// Duplicate Two Independent Array Variables
let array1 = ["michael", "jordan"];

// Spread Operator
let array2 = [...array1];
array2.push("denzel");

// console.log(array1, array2);

// Exercise 1

let departments = ["commercial", "business", "finance"];

let theOffice = {
    names: ["Michael", "Dwight", "Angela", "Jim", "Pam"]
}

// Create a new object Variable that has names and departments;
// First Variable should only have names

// Solution

let ironhack = JSON.parse(JSON.stringify(theOffice));
ironhack.departments = departments;

console.log(theOffice, ironhack);