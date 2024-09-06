// function addNumbers(numbers){
//     return numbers.reduce((sum,number)=>{
//         // console.log("sum:",sum,"+ number:",number);
//         return sum + number;
//     })
// }

// console.log(addNumbers([1,2,3,4]))

// function addNumbers(a,b,a,d){
//     const numbers = [a,b,a,d];
//     console.log([a,b,a,d]);
//     return numbers.reduce((sum,number)=>{
//         console.log("sum:",sum,"+ number:",number);
//         return sum + number;
//     })
// }

// console.log(addNumbers(1,2,3,4))

function addNumbers(...numbers){ // rest operator
    return numbers.reduce((sum,number)=>{
        // console.log("sum:",sum,"+ number:",number);
        return sum + number;
    })
}

console.log(addNumbers(1,2,3,4))