// let companies = [
//     {name:"Google",loc:"Mountain View"},
//     {name:"Facebook",loc:"Leak View"},
//     {name:"Uber",loc:"Taxi View"},
// ];

// console.log(companies[0].location);

// let's destructuring companies locations looks like this:

// const [locations] = companies;
// const [{loc}] = companies;
// console.log(loc); // Mountain View

// let's destructuring companies locations looks like this:


const Google = {
     locations: ["Mountain View", "New York", "losouth"],

}

const { locations:[loc] } = Google;

console.log(loc);// Mountain View

