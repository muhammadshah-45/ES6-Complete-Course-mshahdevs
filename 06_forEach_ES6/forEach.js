let arr = [1,2,3,4,5,6];

let sum = 0;
function adder(number){
 sum += number;
}
 let arr2=arr.forEach(adder)


console.log(arr2);
console.log(sum);
// console.log(arr1);
let fruits = [
    {name:"mango",price:23},
    {name:"Apple",price:14},
    {name:"Orange",price:54}
];

const fruits_1 = fruits.forEach(({el})=>{
    return el;
})

console.log(fruits_1);

let vegetables = ["tomato","potato","onion"];

for(var i = 0; i < vegetables.length; i++){
    console.log(vegetables[i]);
}
const printVegetables = vegetables.forEach((name) => console.log(name));

console.log(printVegetables);





// Create an array of numbers
var numbers = [1,2,3,4,5,6];

// Create a variable to hold the sum

var add = 0;

// Loop over the array, incrementing the sum variable

numbers.forEach(function adder(number){
    add += number;
})

// print the sum variable
console.log(add);


var studentNames =["Muhammad","Shah","Devs"];

var student =studentNames.forEach(function(names){
    console.log(names);
}
);
console.log(student);

