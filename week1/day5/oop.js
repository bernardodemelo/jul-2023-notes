// OOP
// Object Oriented Programming 
// Programming Paradigm based on objects

// Monopoly Example 

// Horrible Example

/* 
// Give info about squares
const squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];

// Create a variable for dice
let dice; 

// Create Players 
let player1 = {
    name: 'Diogo', 
    color: 'blue', 
    position: 0, 
    cash: 1000
}; 

let player2 = {
    name: 'Bruno', 
    color: 'red', 
    position: 0, 
    cash: 1000
}

let player3 = {
    name: 'Melon Musk', 
    color: 'green', 
    position: 0, 
    cash: 1000
}

// Turn of Player 1 
// Randomizing the Dice
dice = 1 + Math.floor(6*Math.random()); 
// Changing Position
player1.position = (player1.position + dice) % squares.length; 
// Changing Cash
player1.cash += squares[player1.position];
// Game Over
if(player1.cash < 0) {
    console.log('Bye, see you later.')
}

// Turn of Player 2 
// Randomizing the Dice
dice = 1 + Math.floor(6*Math.random()); 
// Changing Position
player2.position = (player2.position + dice) % squares.length; 
// Changing Cash
player2.cash += squares[player2.position];
// Game Over
if(player2.cash < 0) {
    console.log('Bye, see you later.')
}

// Turn of Player 3 
// Randomizing the Dice
dice = 1 + Math.floor(6*Math.random()); 
// Changing Position
player3.position = (player3.position + dice) % squares.length; 
// Changing Cash
player3.cash += squares[player3.position];
// Game Over
if(player3.cash < 0) {
    console.log('Bye, see you later.')
}

// Display Info 
console.log(player1);
console.log(player2);
console.log(player3);
*/

// 1st Try - more OOP 

// Give info about squares
const squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];

// Create a variable for dice
let dice; 

// Player 1
let player1 = {
    name: 'Diogo', 
    color: 'blue', 
    position: 0, 
    cash: 1000, 
    move(){
        // Randomizing the Dice
        dice = 1 + Math.floor(6*Math.random()); 
        // Changing Position
        this.position = (this.position + dice) % squares.length; 
        // Changing Cash
        this.cash += squares[this.position];
        // Game Over
        if(this.cash < 0) {
        console.log('Bye, see you later.')
        }
    },
    displayInfo(){
        return console.log(`${this.name} is at position ${this.position} and has ${this.cash}`);
    }
}; 

// Player 2 
let player2 = {
    name: 'Bruno', 
    color: 'red', 
    position: 0, 
    cash: 1000, 
    move(){
        // Randomizing the Dice
        dice = 1 + Math.floor(6*Math.random()); 
        // Changing Position
        this.position = (this.position + dice) % squares.length; 
        // Changing Cash
        this.cash += squares[this.position];
        // Game Over
        if(this.cash < 0) {
        console.log('Bye, see you later.')
        }
    },
    displayInfo(){
        return console.log(`${this.name} is at position ${this.position} and has ${this.cash}`);
    }
}; 

// Player 3
let player3 = {
    name: 'Melon Musk', 
    color: 'green', 
    position: 0, 
    cash: 1000, 
    move(){
        // Randomizing the Dice
        dice = 1 + Math.floor(6*Math.random()); 
        // Changing Position
        this.position = (this.position + dice) % squares.length; 
        // Changing Cash
        this.cash += squares[this.position];
        // Game Over
        if(this.cash < 0) {
        console.log('Bye, see you later.')
        }
    },
    displayInfo(){
        return console.log(`${this.name} is at position ${this.position} and has ${this.cash}`);
    }
}; 

// Turn 1
player1.move();
player2.move();
player3.move();

// Turn 2
player1.move();
player2.move();
player3.move();

// Display Info
player1.displayInfo();
player2.displayInfo();
player3.displayInfo();

// Exercise 1

const chuckNorris = {
    firstName: 'Chuck', 
    lastName: 'Norris', 
    birthYear: new Date('1940-03-10'),
    age: 1001,
    jokes: ['Chuck Norris counted to Infinity... Twice', 'Chuck Norris can divide by zero', 
    'Chuck Norris is faster than Bruno Rocha'], 
    getAge(){
        // return the age of Chuck
        return console.log(this.age);
    },
    addJoke(joke){
        // add a joke to jokes array
        this.jokes.push(joke);
    },
    getRandomJoke(){
        // return a random joke of the jokes array
        return console.log(this.jokes[Math.floor(this.jokes.length * Math.random())])
    },
    getAgeByBirthYear(){
        // BONUS: return age by birth year (comparing to current day)
        let currentDate = Date.now();
        let birthDay = this.birthYear;

        return console.log(Math.floor((currentDate - birthDay) / 31556952000));
    }
}

chuckNorris.getAge();
chuckNorris.addJoke('Chuck Norris kills flies with knives');
chuckNorris.getRandomJoke();
chuckNorris.getAgeByBirthYear();


