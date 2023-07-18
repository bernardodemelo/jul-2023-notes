// Object and Array Destructuring

let person = {
    name: 'Ozzy Osbourne', 
    age: 74, 
    favouriteMusic: 'Metal'
}; 

// ES6 way - Object Destructuring 
// Same thing as:
// let name = person.name; 
// let age = person.age;
// let favouriteMusic = person.favouriteMusic;

// let {name,age,favouriteMusic} = person;

// console.log(age);

// Add a value, while destructuring the Object
// let {name, age, favouriteMusic, nationality = 'english'} = person;
//console.log(person);
//console.log(age, nationality);

let profile = {
    username: 'johncena123', 
    email: 'john.cena@clubpenguin.com', 
    password: 'safepassword123' 
};

// Web App Context
// Login 
let {username, email, password, isChecked = false} = profile;
// Operations regarding login
// After knowing that is a valid user, you change 
// isChecked = true;

// Exercise 1 
const newPerson = {
    name: 'Ironhacker',
    age: 25,
    favouriteMusic: 'Metal',
    address: {
      street: 'Super Cool St',
      number: 123,
      city: 'Miami',
    }
  };

  // Destructure the Object and
  // let {name, age,favouriteMusic,address: {street, number,city}} = newPerson;
  
  // console.log city
  console.log(city);
  // console.log name and age
  console.log(name, age);
  // console.log street
  console.log(street);



// Array Example

const cities = ["Lisboa", "Bratislava", "Coimbra", "Bologna"];

/* let [lisbonCity, bratislavaCity, coimbraCity, bolognaCity] = cities; */

let [, , coimbraCity] = cities;
console.log(coimbraCity);

// let myArray = [{firstName: 'nobita', age:25}, {firstName: 'doraemon', age:35}, {firstName: 'gigante', age: 45}]; 

// let [{firstName, age}] = myArray;

// Object with Arrays

const customer = {
    name: {
        firstName: 'Bruno', 
        lastName: 'Rocha'
    },
    age: 10000, 
    preferences: [
        {
            movies: ['Titanic', 'Love Actually', 'Grinch'], 
            tech: ['JS', 'TypeScript']
        }
    ]
}

let {name: {firstName, lastName}, age, preferences: [{movies, tech}]} = customer; 



