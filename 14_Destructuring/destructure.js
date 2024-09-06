console.log("destructuring");

// Example

const expense =[{
    type:"Development",
    amount:"34$",
}]

// var types = expense.type;

// var amount = expense.amount;
// console.log(types);

const {type,amount,name} = expense;

console.log( type, amount ,name); // name will be undefined 

// Destructuring with default values

const {type:t, amount:a, name:n="defaultName"} = expense;

console.log(t, a, n); // defaultName will be printed as name is not present in expense object

// Destructuring with nested objects
  

let person = {
    name: "Muhammad",
    age :23,
    gender:"Male", 
    address: {
        street: "123 Main St,",
        city: "New York",
        state: "NY"
    }
}

// function savedTheData(data){
//     return `The student name is ${data.name} and the age is ${data.age} and  he is ${data.gender},and his address is ${data.address.city}`;
// }

function savedTheData({name:firstName, age, gender, address},{lastName}){
    return `The student name is ${firstName} ${lastName} and the age is ${age} and  he is ${gender},and his address is ${address.street}, ${address.city}, ${address.state}`;
}

let result =savedTheData(person,{lastName:"Shah"});
console.log(result);


const student = [
    {names:"Shah",marks:343,subject:"Computer Science"},
    {names:"hamad",marks:312,subject:{names:"ahmad"}}
]

const [{names:lastName,marks:myMarks},{names:hamadName,subject:{names:ahmadName}}] = student;
console.log(lastName,myMarks);
console.log(hamadName,{ahmadName});


const developer = {
    devName:"shahDevs",
    marks:"443",
    address:{
        street:"Sheikh Muhammadi",
        city:"Peshawar"
    }
}

const {
    devName:firstName,

} = developer

console.log(firstName)


// var animals=["horse", "ox", "cow", "pig", "duck"];
// var i = 0;
// while (i < animals.length) {
//   if (animals[i] === "ox") {
//     alert("Found it!");
//     break;
//   }
//   i++;
// }
// var i = 0;
// do {
//   alert(i);
//   i++;
// } while (i < 0);

