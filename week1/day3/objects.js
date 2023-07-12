// Objects 
// Car 
// Collection of tyres, steel, glass, lights, gasoline

let car = {
    tyres: 4, // key (label, placeholder, nickname)-value pair
    steel: true, 
    glass: true, 
    gasoline: "2L", 
    lights: ["front-left", "front-right", "back-left", "back-right"]
}

// check the number of tyres
// console.log(car.tyres); //alternative is car['tyres']--> not so used.

// add a property
car.brand = "Tesla";
//console.log(car.brand);

// update values
car.brand = "Ironhack";
//console.log(car.brand);

// delete a property
delete  car.lights; 
//console.log(car);

// create an array with all the keys of the object
//console.log(Object.keys(car));

// create an array with all the values of the object
//console.log(Object.values(car));

// Exercise 1 : Create a Library 
let library = {};
let users = [];
let books = [];

let user1 = {name: "Michael", favouriteGenre: "Comedy"};
let user2 = {name: "Bruno Rocha", favouriteGenre: "Speed"};

let book1 = {name: "War and Peace", author: "Lev Tolstoi"};
let book2 = {name: "Sound and Fury", author: "William Faulkner" };

// Have the users array with user1 and user2
users.push(user1,user2);
console.log(users);
// Have the books array with book1 and book2
books.push(book1, book2);
console.log(books);
// Have the library object with property users and books that are the arrays that we filled.
library.users = users;
library.books = books; 

/* Alternative Way of doing this: 
library = {
    users, 
    books
} 
*/ 

console.log(library);



