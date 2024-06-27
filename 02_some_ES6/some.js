const fruits = ["apple", "banana", "mango", "guava"];

function checkAvailability(arr, val) {
  return arr.some((arrVal) => val === arrVal);
}

console.log("Checking whether a value exists in an array");
console.log(checkAvailability(fruits, "kela")); // false
console.log(checkAvailability(fruits, "banana")); // true

console.log("Lets take a look at a Ram of computer by using some");

var computers = [
  { name: "Apple", ram: 24 },
  { name: "Compaq", ram: 4 },
  {
    name: "Acer",
    ram: 32,
  },
  { name: "Lenovo", ram: 8 },
];

var allComputersCanRunProgram;

var onlySomeComputersCanRun;

for (let i = 0; i < computers.length; i++) {
  var computer = computers[i];
  if (computer.ram < 16) {
    (allComputersCanRunProgram = "nanan "), false;
  } else {
    (onlySomeComputersCanRun = "theek da run ba ye kom"), true;
  }
}

console.log(computers);
console.log("-----------");
console.log(allComputersCanRunProgram);
console.log("=======");
console.log(onlySomeComputersCanRun);

let computer_1 = computers.every(function (computer) {
  console.log(computer.ram > 16);
});

let computer_2 = computers.some(function (computer) {
  console.log(computer.ram > 16, "some okay");
});

console.log(computer_1);
console.log(computer_2);

//"+ -- - -- + = OR Operator"
true || false || true; // true

//"- __ - __ + = OR operator "
false || false || true; // true

//"-__ - ___ - = Or Operator"
false || false || false; // false

//=========== && Operator =====///

//"+ -- - -- + = && Operator"
true && false && true;

//"+ -- + -- + = && Operator"
true && true && true;

//"- __ - __ + = && operator "
false && false && true;

//"-__ - ___ - = && Operator"
false && false && false;

const studentAge = [12, 8, 43, 26, 18];

function checkAdultAge(age) {
  return age > 23;
}
console.log(studentAge.some(checkAdultAge));

const numbers = [4, 12, 16, 20, 67];

function checkValue(x) {
  return x > document.getElementById("toCheck").value;
}

function myFunction() {
  document.getElementById("demo").innerHTML = numbers.some(checkValue);
}

console.log("Let's take a look at for age by some");
var names = ["Muhammad", "Shah", "Alex", "Joe"];

let everyFun_1 = names.some(function (name) {
  return name.length > 5;
});

console.log(everyFun_1, "some");

function Field(value) {
  this.value = value;
}

var username = new Field("sh");
var password = new Field("my_password");
var birthdate= new Field("10/10/2300")

Field.prototype.validate = function () {
  return this.value.length >= 0;
};
console.log(username.validate() || password.validate());
console.log(username);
console.log(username.validate());
password.validate();

var fields = [username,password,birthdate]

var formIsValid = fields.every(function(field){
    return field.validate();
})

if(formIsValid === true){
 //allow user to submit
 console.log(fields.length[0]);
}else{
 //show an error
 console.log("show the error");

}
console.log(formIsValid,"form is valid");
// If you want to print out in console by using any browser like (chrome, safari(MacOS), Firefox, Opera Mini) so please use this code for validation. 👇

// username.validate(Field);


function isBiggerThan10(element, index, array) {
    return element > 10;
  }
  
  var arr1=[2, 5, 8, 1, 4];
  var arr2 = [12, 5, 8, 1, 4];
 let arr_1= arr1.some(isBiggerThan10); // false
 let aar_2 = arr2.some(isBiggerThan10); // true
  console.log(arr_1);
  console.log(aar_2);


  console.log("Checking whether a value exists in an array");
const fruits_1 = ["apple", "banana", "mango", "guava"];

function checkAvailability(arr, val) {
  return arr.some((arrVal) => val === arrVal);
}

checkAvailability(fruits_1, "kela"); // false
checkAvailability(fruits_1, "banana"); // true


const collegestudent = ["Muhammad",450,"English"];

function collegestudentData(subject,marks){
    return subject.some((subjects)=> marks === subjects)
}

console.log(collegestudentData(collegestudent,450));


console.log("Converting any value to Boolean");

const TRUTHY_VALUES = [true, "true",1];

function getBoolean(value){
    if(typeof value === "string"){
        value = value.toLowerCase().trim();
    }else{

    }
    return TRUTHY_VALUES.some((x)=> x === value);

}

console.log(getBoolean(false)//
);
console.log(getBoolean(1)); // true


console.log("Using the third argument of callbackFn");

const numbers_1 =[1,2,3,4,4,5];


const isIncreasing = !numbers_1.filter((num)=>num > 0).some((num,index,array)=>{
    // without the array argument, there's no way to easily access the 
    // the intermediate array without saving it to a variable.

    if(index === 0) return false;
    return num <= array[index -1];
});

console.log(isIncreasing); // false;
console.log(numbers_1);


console.log("Using some() on sparse arrays");

document.write("In JavaScript, sparse arrays are arrays that have empty slots or holes, which are represented by the value undefined. When using some() on a sparse array, the callback function will only be called for the elements that exist, and not for the holes.")

let data_1 = [1, ,2,5,8];
let data_11 = data_1.some((x) => x === undefined);

// console.log(data_1);// undefine (hole => empty element)
console.log(data_11);

let data_2 = [1, ,1];

let data_22=data_2.some((x)=> x !== 1);

console.log(data_2);
console.log(data_22); // false

let data_3=[1,undefined,1];
let data_33 = data_3.some((x)=> x !== 1)
console.log(data_3);
console.log(data_33);

const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
  3: 3, // ignored by some() since length is 3
};
console.log(Array.prototype.some.call(arrayLike, (x) => typeof x === "number"));
// false




var ages= [6,30,25,20];

document.write(ages +"<br>");

var b = ages.some(checkAge);

document.write( b)
console.log(b);

function checkAge(age){
    return age > 18; 
}