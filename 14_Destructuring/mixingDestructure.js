let companies = [
    {name:"Google",loc:"Mountain View"},
    {name:"Facebook",loc:"Leak View"},
    {name:"Uber",loc:"Taxi View"},
];

// console.log(companies[0].location);

// let's destructuring companies locations looks like this:

// const [locations] = companies;
const [{ loc}] = companies;
console.log(loc); // Mountain View

// Now, let's change the value of location:

// location = "San Francisco";

// console.log(companies[0].location); // San Francisco

// But in this case, since we're changing the value of a const variable, it won't affect the original array.

// console.log(companies[0].location); // Mountain View
