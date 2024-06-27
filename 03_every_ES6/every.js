var names=[
    "Muhammad",
    "Shah",
    "Alex",
    "Joe"
];

let everyFun=names.every(function(name){
    return name.length > 3; //Joe;
})

console.log(everyFun,"every");

var ages= [80,26,25,20];

document.write(ages +"<br>");

var b = ages.every(checkAge);

document.write( b)
console.log(b);

function checkAge(age){
    return age >= 18; 
}

let data_4 =[12, 5, 8, 130, 44].every(isBigEnough); // false



function isBigEnough(element, index, array) {
    return element >= 10;
  }
  
 let data_5= [12, 54, 18, 130, 44].every(isBigEnough); // true
  
console.log(isBigEnough(8,data_4.length,data_4));

console.log("Check if one array is a subset of another array");


document.write("<br> <br>Since the function returns true for at least one element (in this case, 12), the some() method returns true overall.")



const isSubset = (array1, array2)=>
    array2.every((element)=>array1.includes(element));
console.log(isSubset([1,2,3,4],[3,4]));// true

console.log(isSubset([1,2,3,5],[2,3]));


var array_3 = [1,2,3,4,5];
var array_4 =[3,5];

var isSubset_1 = (array_3,array_4) =>
    array_4.every((element)=> array_3.includes(element))
console.log("-----2nd Way");
console.log(isSubset_1(array_3,array_4));


console.log("Using the third argument of Callbackfn");


// const numbers_1=[-2,10,-8,16,-32];

// const isIncreasing = numbers_1
// .filter((num)=>num > 0)
// .every((num,index,arr)=>{
//     // if(index === 0) return true;
//     return num > arr[index -1];
// });

// console.log(isIncreasing);

const numbers_2 = [57, 56, 35, 34, 32];
const isIncreasing_2 = numbers_2
  .filter((num) => num > 0)
  .every((num, index, arr) => num > arr[index - 1]);
console.log(isIncreasing_2,"d"); // true

const numbers_1 = [-2, 10, -8, 16, -32];
const isIncreasing = numbers_1
  .filter((num) => num > 0)
  .every((num, index, arr) => index === 0 || num > arr[index - 1]);
console.log(isIncreasing); // true