// Class 
// a blueprint to create an Object

// 2nd and Final Try - Even more OOP

// Give info about squares
const squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];

// Create a variable for dice
let dice; 

class Player {
    constructor(name, color){
       this.name = name; 
       this.color = color; 
       this.position = 0; 
       this.cash = 1000; 
    }
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
    }
    displayInfo(){
        return console.log(`${this.name} is at position ${this.position} and has ${this.cash}`);
    }
}

let player1 = new Player('Diogo', 'blue'); 
let player2 = new Player('Bruno', 'red'); 
let player3 = new Player('Melon Musk', 'green');

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


// Class Example with Inheritance
class Animal {
    constructor(name, mainColor, sound){
        this.name = name; 
        this.mainColor = mainColor; 
        this.sound = sound;
    }
    scream(intensity){
        return console.log(`${this.sound} ${'!'.repeat(intensity)}`)
    }
}

// Extends 
class Cat extends Animal {
    constructor(name, mainColor, sound, cuddleFactor){
        super(name, mainColor,sound); // belongs to all animals 
        this.cuddleFactor = cuddleFactor; // only belongs to cats
    }
}

let garfield = new Cat('Garfield', 'orange', 'meow', 4);
console.log(garfield);
garfield.scream(5);

// OOP
// Abstraction - aims to hide complexity to the user. 
// Encapsulation - helps with data security. For example, you can't 
// re-write class1 function if you're in class2
// Polymorphism - you can have different values to the same class
// Inheritance - you can have the possibility to create classes 
// that inherit (get extended) from another ones.
