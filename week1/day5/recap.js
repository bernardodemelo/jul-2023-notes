// RISE AND SHINE RECAP
let recapObject = {
    list: [1,50,6,true,"portugal",99,false,null,100, 22]
}

// Have a new Array with Only Numbers
// Then, multiply it by two each number of this new array
// Then, calcule the total of the sum between each number (that was multiplied by two)

// BONUS: sort them from the greater number to the lower number

// SOLUTION: 

// 1st Part - .filter() --> searches over each element of the array
let numbersArray = recapObject.list.filter((number)=>{
    if(number === Number(number)){
        return number; 
    }
    /*
    Alternative 1 
     if(typeof number === "number"){
        return number
     }
    */
})

// 2nd Part - .map() --> operates over each element of the array
numbersArray = numbersArray.map((number)=>{
    return number * 2; 
})

console.log(numbersArray);

// 3rd Part - .reduce() --> used for sums and returns either a string / number
let sum = numbersArray.reduce((total, value)=>{
    return total + value;
}, 0)

console.log(sum);

// BONUS - .sort() --> used for sorting numbers or strings
let sortedArray = numbersArray.sort((a,b)=>{
    return b-a;
})

console.log(sortedArray);