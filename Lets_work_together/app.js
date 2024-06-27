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

const data_2 =[12,34,6,78,3]; //returns the value of the first element that passes a test,which is means that element meets with condition.

function findValue(value){
    return value <= 50;
}

const findData = data_2.find(findValue);

console.log(findData);
