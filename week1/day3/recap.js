// RISE AND SHINE RECAP

// Write a JavaScript function that takes an array of numbers and returns the lowest and greatest numbers, respectively.

// Only need functions, loops and conditionals

let numbersArray = [100, 101, 10, 2, 33, 44];

function findNumbers (numbers){
    // Variable Declaration 
    let greatestNumber = 0; 
    let lowestNumber = 0; 
    let returnedArray = [];

    // Calcule the Greatest Number 
    // I check if numbers are initially greater than 0 
    // re-assign the greatestNumber variable
    // and then greater than the greatest number
    
    console.log("Greatest Number Initial Value:", greatestNumber);
    numbers.forEach((number)=>{
        if(number > greatestNumber){
            greatestNumber = number; 
            console.log("Greatest Number value:", greatestNumber);
        }
    })

    console.log("Greatest Number Final Value:", greatestNumber);
    
    lowestNumber = greatestNumber;

    console.log("Lowest Number Inital Value:", lowestNumber)


    // Calcule the Lowest Number
    // I check if numbers are initially inferior to the greatestNumber 
    // of the array
    // I re-assign the lowestNumber variable 
    // and then compare if they're lower than the lowestNumber

    for (let i = 0; i<numbers.length; i++) {
        if (numbers[i] < lowestNumber) {
            lowestNumber = numbers[i];
            console.log("Lowest Number value", lowestNumber);
        }
    }

    console.log("Lowest Number Final Value:", lowestNumber);

    returnedArray.push(greatestNumber, lowestNumber);
    return returnedArray;

}

findNumbers(numbersArray);

// BONUS: write another function that takes those two numbers and calcules if there's a remainder in the division between the greatest and lowest number. 

// If there's a remainder return true;
// If not, return false;

function findRemainder(){
    let numbers = findNumbers(numbersArray);
    console.log(numbers);

    if(numbers[0]%numbers[1] === 0) {
        return console.log(false);
    } 
    else{
        return console.log(true);
    }
}

findRemainder();