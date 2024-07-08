var color = "red";
console.log(firtName);
var firtName = "Muhammad";
firtName = "shah";
console.log(color);
// console.log(firtName);

// var name = "shah";
// var title = "web developer";

// var hourlyWage = 30;

//ES6

// const name = "Shah";
// const title = "Web Developer";

// title = "software engineer";
// let firtName = "shah Devs";
// console.log(title);


// console.log(lastName); // undefined
// var lastName = "Devs";
// lastName = "Sanan";

// console.log(lastName);// Sanan


// console.log(title); //Cannot access "title" before initialization 
let title = "software engineer";
title = "Full Stack Web Engineer";

console.log(title);// Full Stack Web Engineer


function count(targetString){
    var characters = ['a','e','i','o','u'];
    var number = 0;

    for (let i = 0; i < targetString.length; i++) {
        if(characters.includes(targetString[i])){
            number++;
        }
    }
    return number;
}
console.log(count('aeiovxbdsesioupieghf'));