let companies = [
    {name:"Google",loc:"Mountain View"},
    {name:"Facebook",loc:"Leak View"},
    {name:"Uber",loc:"Taxi View"},
];

// console.log(companies[0].location);

// let's destructuring companies locations looks like this:

// const [locations1] = companies;
const [{name:username,loc}] = companies;
// console.log(locations1); // Mountain View
console.log(username,loc); // Google Mountain View

// let's destructuring companies locations looks like this:


const Google = {
     locations: ["Mountain View", "New York", "losouth"],
}
console.log(Google);

// const { locations:[loc] } = Google;

// console.log(loc);// Mountain View


//current_weather : time = 1724220000  => 478.95 hours
// hourly_weather : time = 1724180400  => 478.939 hours

//please give me a code for current weather time  - hourly_weather

// please convert milliseconds to hours
console.log(478.939 >= 478.95);
