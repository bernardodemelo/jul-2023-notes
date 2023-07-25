// Example
// let arr = ["ledl", "dell", "edll", "abc", "bana"];

// The previous array has 3 anagrams: "ledl" and "dell", "ledl" and "edll", "dell" and "edll"

function anagramCounter (wordsArray) {
  // Counter variable to count anagrams
  let counter = 0; 
  
  // Sorting the Characters inside a word to find words that have the exact same letters
  let sortedArray = wordsArray.map(element=>{
  let arr = element.split('');
  let sorted = arr.sort();
  return sorted.join('');
  }); 
  
  // For Loop inside For Loop, in order to compare the words. If, after sorted, the loop finds that they're equal, then we have an anagram. 
  for(let i= 0; i<sortedArray.length; i++){
    for(let p=0; p<sortedArray.length; p++){
      if(sortedArray[i]===sortedArray[p] && p>i){
        counter ++
      }
    }
  }
  
  return counter;
}