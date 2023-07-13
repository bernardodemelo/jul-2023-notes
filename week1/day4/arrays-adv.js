// Array Methods 

// Map

const myArray = [1,2,3,4];

let newArray = myArray.map((number)=>{
    return number + 1; 
})


console.log(newArray);

// Filter
const people = [
    { name: 'Candice', age: 25 },
    { name: 'Tammy', age: 30 },
    { name: 'Allen', age: 20 },
    { name: 'Nettie', age: 21 },
    { name: 'Stuart', age: 17 },
    { name: 'Bill', age: 19 }
];

let peopleCanDrink = people.filter((person)=>{
    if(person.age >=21){
        return person;
    }
});
  

console.log(peopleCanDrink);

// 2nd Example with Filter 

const myNumbers = [1, 60, 112, 100, 3, 5, 217];

const result = myNumbers.filter((number)=>{
    if(number > 50 && number % 2 === 0){
        return number;
    } 
})

console.log(result);

// Reduce 
let numbersToSum = [1,2,3]

const total = numbersToSum.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
})

console.log(total);

// Backstreet Boys Example
const lyrics = ['You', 'are', 'my', 'fire', 'the', 'one', 'desire'];

let concatLyrics = lyrics.reduce((sum, word)=>{
    return sum + ' ' + word;
})

console.log(concatLyrics);

// Exercise: I want to have a new array with all the elements capitalized
// Array Methods (map, reduce, filter) only. 

const cities = ['miami', 'barcelona', 'madrid', 'amsterdam', 'berlin', 'lisbon', 'paris'];

let upperCaseCities = cities.map((city)=>{
    return city.toUpperCase();
})

console.log(upperCaseCities);

// 2nd Exercise

const product = {
    name: 'AmazonBasics Apple Certified Lightning to USB Cable',
    price: 7.99,
    manufacturer: 'Amazon',
    reviews: [
      { user: 'Pavel Nedved', comments: 'It was really useful, strongly recommended', rate: 4 },
      { user: 'Alvaro Trezeguet', comments: 'It lasted 2 days', rate: 1 },
      { user: 'David Recoba', comments: 'Awesome', rate: 5 },
      { user: 'Jose Romero', comments: 'Good value for money', rate: 4 },
      { user: 'Antonio Cano', comments: 'It broked really fast', rate: 2 }
    ]
};

// I want an average of reviews'rates

// Sum of all elements
const totalReviews = product.reviews.reduce((sum,review)=>{
    return sum + review.rate;
}, 0)

console.log(totalReviews);

// Calcule the average
function avg(){
    const avgRate = totalReviews / product.reviews.length; 
    return console.log(avgRate);
}

avg();

// Sort Strings 

const words = ["banana", "kiwi", "apple", "blueberry", "papaya", "cherry"];

words.sort();

// words.sort().reverse() will sort in reverse order 

console.log(words);

// Sort Numbers 
const numbers = [1,22, 2010, 2, 3, 12378, 99, 88];

numbers.sort((a,b)=>{
    return a-b;
})

console.log(numbers);