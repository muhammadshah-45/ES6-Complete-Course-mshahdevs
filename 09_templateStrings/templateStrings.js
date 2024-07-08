function getMessage(){
    const year= new Date().getFullYear();
    return `The year is ${year}`;
}

console.log(getMessage());

function getMonth(){
    return  `The month is ${new Date().getMonth()}`
}
console.log(getMonth());