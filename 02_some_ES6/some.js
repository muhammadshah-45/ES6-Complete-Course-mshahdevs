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