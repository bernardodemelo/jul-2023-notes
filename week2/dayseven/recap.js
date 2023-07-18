// RISE AND SHINE RECAP

// Create a function named "grillSalmon" that, after 10seconds, returns a console.log with "Salmon grilled"

// Create a function named "cookRice" that, after 5 seconds, returns a console.log with "Rice cooked"

// Create a function named "washDishes" that, after these two functions were done, returns a console.log with "dishes washed."

// Solution 

let salmonServed = false; 
let riceServed = false;

function grillSalmon(callBack){
    setTimeout(()=>{
        console.log("Salmon grilled");
        callBack();
    }, 10000); 

};

function cookRice(){
    setTimeout(()=>{
        return console.log("Rice cooked")
    }, 5000)
}; 

function washDishes(){
    return console.log("Dishes washed");
}

grillSalmon(washDishes);
cookRice();





/* function washDishes(){
    let counter = 0; 
    let dinnerServed = false;
    const washDishes = setInterval(()=>{
        counter ++; 
        if(counter === 1 && dinnerServed === false){
            counter = 0; 
        }
        if (salmonServed  && riceServed ){
            dinnerServed = true; 
            console.log("dishes are Washed");
            clearInterval(washDishes);
        }
    })
}
*/ 

/* setTimeout(()=>{
    return console.log("dishes washed");
}, 11000)
*/



