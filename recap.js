// RISE AND SHINE RECAP

// OOP Exercise
/*
// 1) 
// I want a function inside class Teacher that accepts one paramenter that is a name and returns a console.log saying `Hooray ${yourName}! You are graduated`

// call the function to test it.

// Solution

class Teacher {
    constructor(name, role){
        this.name = name; 
        this.role = role;
    }
     student(john){
        this.john = john; 
        return console.log(`Hooray ${john}! You graduated`)
    } 

    graduateStudent(studentName){
        return console.log(`Hooray ${studentName}! You aren graduated!`)
    }
}

let ironhackTeacher = new Teacher("fred", "lead teacher");
ironhackTeacher.graduateStudent("João Elias");

let lyrics = "Tell me why. Ain't nothin' but a heartache. Tell me why. Ain't nothin' but a mistake";

// 2) 
// create a webDevTeacher Class that extends Teacher Class. 
// this new class should have a function that returns a console.log of a piece of Backstreet Boys lyrics. 

// call the function to test it. 

class WebDevTeacher extends Teacher{
    constructor(name, role){
        super(name,role);
    }
    singSomeLyrics(someLetters){
        return console.log(someLetters);
    }
}

let webDevProfessor = new WebDevTeacher("bernardo", "lead teacher");
webDevProfessor.singSomeLyrics(lyrics);

console.log(ironhackTeacher, webDevProfessor);

*/

// Assessment Exercise
/* 
Create a function named findUnique that receives an array of words as an argument.
The function should return the first found unique (non-repeating) word.

Sample Input/Output:
input: ['ana', 'ivan', 'jan', 'ana', 'jan']
output: 'ivan'

input: ['fizz', 'foo', 'bar', 'bazz', 'fizz', 'bazz']
output: 'foo'

input: ['apple', 'pear', 'strawberries', 'pineapple']
output: 'apple'
*/

let myArray = ['apple', 'pear', 'strawberries', 'pineapple']

function findUnique(wordsArray){
    let foundUniqueWord = false;

    wordsArray.forEach((word)=>{
        if(wordsArray.indexOf(word) === wordsArray.lastIndexOf(word) && foundUniqueWord === false){
            foundUniqueWord = true; 
            return console.log(word);
        }
    })
}

findUnique(myArray);