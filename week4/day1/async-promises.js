// Async and Await 
// Two keywords that provides us a better syntax to write Promises
// They allow us to suspend the execution of code while we wait (await) for async code to finish.

// First Example
// "I wait 5 seconds, and I'll start learning MongoDB"

async function learnMongo(){
    try{
        await setTimeout(()=>{
            console.log("Ready for Mongo!");
        }, 5000);  
    }
    catch (err) {
        console.log(err);
    }
};

// learnMongo();

// Second Example

const directions = [
    "Starting Point: Rossio", 
    "Head to Rua Augusta", 
    "Turn left onto Terreiro do Paço", 
    "Rua do Instituto Virgílio Machado, n14"
]

function obtainDirections (step){
    return new Promise((resolve,reject)=>{
        if (!directions[step]){
            throw new Error("Sorry, not found :/")
        } else{
            resolve();
        }
    })
}

async function goToIronhack(){
    try{
        await obtainDirections(0);
        await obtainDirections(1);
        await obtainDirections(2);
        await obtainDirections(3);
        // await obtainDirections(1000);
        console.log("You arrived at your destination!");
    }
    catch (err) {
        console.log(err);
    }
}

goToIronhack();