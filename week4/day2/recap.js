// RECAP
// Promises 

// FISHERMAN EXERCISE
// Create two promises: one that resolves("fish Sardines"), another that resolves("fish salmon")

// Promise Creation 
const fishSardine = new Promise(function(resolve,reject){
    resolve("fish Sardines")
});

const fishSalmon = new Promise(function(resolve,reject){
    resolve("fish Salmon")
});

// Consume Both promises with: 
// .then() and .catch() 
/*
fishSardine.then((resolvedValue)=>{
    console.log(resolvedValue);
    // return fishSalmon
}).then((resolvedValue)=>{
    console.log(resolvedValue);
})
*/

// try{} and catch {}

function fisherOfSardines(){
    return fishSardine;
}

function fisherOfSalmons(){
    return fishSalmon;
}

async function fisherMan(){
    try{
    // Resolved Promises Area
    let response = await fisherOfSardines();
    console.log(response);

    response = await fisherOfSalmons();
    console.log(response);
    }
    catch {
    // Unsuccessful Promises Area
    }
}

fisherMan();

// Promise.all()
Promise.all([fishSardine, fishSalmon]).then((values)=>{
    console.log(values);
})


