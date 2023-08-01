// PROMISES 

// What is a real-life promise?
// A commitment that somebody does regarding to an action that is going to happen in the future
// And is something you should keep.

// JavaScript Promises 
// A Promise is a representation of the eventual completion or failure of an async operation.
// It's useful for Backend, because the client is going to be dependant of outside computers (servers).

// Examples
// "If you wait 10 seconds, I'll teach you ExpressJS"

// Creating the Promise
/*const expressSuccessPromise = new Promise(function(resolve, reject){
    let numSeconds = 0;
    const countToTen = setInterval(()=>{
        if(numSeconds<10){
            numSeconds ++;
            console.log(numSeconds);
        }
        else if (numSeconds === 10){
            resolve("It's time for Express, guys");
            clearInterval(countToTen);
        }  
    }, 1000)
})*/

// Consuming the Promise
/*expressSuccessPromise.then(
    (value) => console.log("fulfilled:", value), 
    (err) => console.log("rejected:", err)
);*/

// Exercise 
// Create a JS Promise that checks out if today's Monday. 
// If it's true, console.log("It's Monday!");

const mondayPromise = new Promise(function(resolve,reject){
    const date = new Date();
    if (date.getDay() === 1){
        resolve("It's Monday!");
    }    
})

//mondayPromise.then((val)=>console.log(val), (err)=> console.log(err));

// EXAMPLE 2: 
// Create a JS Promise that checks out if today's Tuesday. 
// If it's true, console.log("It's Tuesday!");

const tuesdayPromise = new Promise(function(resolve,reject){
    const date = new Date();
    if (date.getDay() === 2){
        resolve("It's Tuesday!");
    } else {
        reject("Bad timing, I guess.")
    }    
})

tuesdayPromise.then((val)=>console.log(val), (err)=> console.log(err));

// Example 3 
// Create a JS Promise that checks out if today's Wednesday. 
// If it's true, console.log("It's Wednesday!");

/* const wednesdayPromise = new Promise(function(resolve,reject){
    const date = new Date();
    if (date.getDay() === 3){
        resolve("It's Wednesday!");
    } else {
        throw new Error("Bad timing, I guess");
    }    
})

wednesdayPromise.then((val)=>console.log(val));

wednesdayPromise.catch((err)=> console.log(err.message)); */


// Promise.all() example
// "After I catch a Gengar and a Rayquaza, I promise you to show you my Pokemons"

const catchGengar = new Promise(function(resolve, reject){
    resolve("A Gengar!");
})

const catchRayquaza = new Promise(function(resolve, reject){
    resolve("A Rayquaza!");
})

Promise.all([catchGengar, catchRayquaza]).then((values)=>{
    console.log(values);
});



