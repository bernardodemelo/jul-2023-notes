// Sync vs Async 
// JavaScript is a synchronous Programming Language with async functionalities

// Sync Example

let variable1 = "Aloha";

let variable2 = "Quim Barreiros";

function singASong(){
    return console.log("This my song!");
}

//console.log(variable1);
//singASong();
//console.log(variable2);

// Async Example
//console.log("First");
// setTimeout is a JS method that does an action after a defined delay
// delays are represented in milliseconds (ms)
// 1 seconds = 1000ms

setTimeout(()=>{
    // console.log("Second");
}, 2000)
//console.log("Third");

// Callback

function sayMessage(){
    return console.log("Now I am available!");
}

function callTime(param1, string1) {
    setTimeout(()=>{
        param1(string1);
    }, 1000)
}

callTime(sayMessage, "Aloha");

// setInterval --> action happens within an interval of time

function tenAndTenSeconds(){
    let seconds = 0; 

    const startWatch = setInterval(()=>{
        seconds ++ 
        if(seconds === 30){
            clearInterval(startWatch);
        
        }
        else if (seconds%10 === 0){
            return console.log(`How many seconds have passed: ${seconds}`)
        }
        console.log(seconds);
        console.log(`How many seconds have passed: ${seconds}`);
    }, 1000);
}
tenAndTenSeconds();

