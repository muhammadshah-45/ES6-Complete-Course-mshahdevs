console.log("Reduce Method");

const array1=[1,2,3,4,5];

const initialValue = 0;

const sumWithInitial = array1.reduce((accu,curr)=>accu + curr ,initialValue);

console.log(sumWithInitial);

//===== Display All round numbers ========//

const roundNumbers = [12.3,4.5,78.5,2];

const sumWithRoundNumbers = roundNumbers.reduce(getSum,0);

function getSum(total,num){
    return total + Math.round(num)
}
console.log(sumWithRoundNumbers);

//======== some() method array======//

console.log("some() method ");

const data_1= [12,2,16,6];//if at least one element meets with condition then returns true;

const data_1_copy = data_1.some((age)=>age > 18);

console.log(data_1_copy);

function checkAge(age){
    return age > 18;
}
console.log(data_1.some(checkAge));


// ============ every() method =========//

console.log("every method for ages");

//Create Array
const ages = [23,34,67,18,23];//if the function returns true for all elements.

//Create a Test function 
function checkAges(age){
  return age >=18;
}

//All ages are over 18?

const age =  ages.every(checkAges);

console.log(age);

/// =============== find() Method ============= //

console.log("find() method");

const data_2 =[54,34,51,78,67]; //returns the value of the first element that passes a test,which is means that element meets with condition.

function findValue(value){
    return value <= 50;
}

const findData = data_2.find(findValue);

console.log(findData);


//==============Reduce () method by Object Arrays =================== //
console.log("reduce () object arrrays");
const student =[
    {age:23,name:"shah"},
    {age:12},
    {age:56}
];

const sum = student.reduce((acc,curr)=> acc + curr.age,0);//If you change the initial value to 0, the calculation would be:

// - Initial value: 0
// - First iteration: acc = 0, curr = {age: 23} => acc + curr.age = 0 + 23 = 23
// - Second iteration: acc = 23, curr = {age: 12} => acc + curr.age = 23 + 12 = 35
// - Third iteration: acc = 35, curr = {age: 56} => acc + curr.age = 35 + 56 = 91

// And so on.
console.log(sum);// so the output would be 91, 92,93 and so on ..


//=========== some()method on array object ========//
console.log("some() Array Object");
const students=[
   {name:"Muhammad",age:15,grade:'A'},
   {name:"shah",age:20,grade:"B"},
   {name:"devs",age:15,grade:"C"}
];

// const hasStudentWithAnyGrade= students.some((student)=> student.grade === "A");

// const hasStudentWithAnyGrade= students.find((student)=> student.age > 15);

// const hasStudentWithAnyGrade= students.every((student)=> student.age >= 15);
// const hasStudentWithAnyGrade= students.filter((student)=> student.grade === "B");
const hasStudentWithAnyGrade= students.find((student)=> student.age >= 15);
console.log(hasStudentWithAnyGrade);


const numbers = [1,2,3,4,5,6,7,8];

const evenNumbers = numbers.filter((number)=> number % 2  === 0 );
const oddNumbers = numbers.filter((number)=> number % 2  !== 0 );


console.log(evenNumbers);

console.log(oddNumbers);
var answers = [];
for (var i = 0; i < 5; i++) {
     answers[i] = prompt("Enter yes or no");
     if (answers[i] === "yes") {
        console.log(answers[i]);
    var  positive = 1;
    }
  }

  console.log(answers);

  // An example:

var nums = [1, 2];
for (var i = 0; i < 2; i++) {
  if (nums[i] === nums[i]) {
    alert(nums[i]);
  }
}