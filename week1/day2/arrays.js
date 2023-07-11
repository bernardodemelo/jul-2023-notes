// Arrays are data structures that permit us to store a collection of elements
// They store information in sequential order (like a chocolate, in tiny squares of computer's memory)

// You can initialize an empty array 
let arrayOfNames=[]; 

// Or full of data
let dBCharacters = ["Goku", "Vegeta", "Trunks", "Freeza"];

// Calcule the length (number of elements) of an array
//console.log(dBCharacters.length);

// To access elements of the Array, we refer it via Index
// First index is 0, second is 1, third is 2, etc. 
//console.log(dBCharacters[1]) // Vegeta --> second element

// Add "Gohan" to the existing array
dBCharacters.push("Gohan");
// dBCharacters.push("Bernardo")[2]; --> NOT BUENO
//console.log(dBCharacters);

// Delete "Gohan"
dBCharacters.splice(4,1); //splice deletes via index and quantity.
// in this case, deletes the element on index 4 and deletes just one starting the index (included)

// Add "Gohan" to the first index on the array
dBCharacters.unshift("Gohan");
console.log(dBCharacters);

// .pop() removes the last element of an array
dBCharacters.pop();
console.log(dBCharacters);

// Loop trough Arrays

// with the For Loop
for (let i=0; i<dBCharacters.length; i++){
    if(i === 1){
      continue; // skips the second element of the array
    }
    else if(i === 2 ){ // breaks the loop on the third element before being console.logged, so we just have the first element printed out.
        break;
    }
    console.log(dBCharacters[i]);
}

// with the forEach Loop
dBCharacters.forEach((characters)=>{
    console.log(characters);
})

