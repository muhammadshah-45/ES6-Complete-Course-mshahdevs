//Let's Start with map() method

let numbers =[2,4,5,6,7];

// let doubleNumbers = [];

// for(let i=0; i<numbers.length; i++){
//     doubleNumbers.push(numbers[i]*2);
// }

let doubleNumbers=numbers.map((number)=>{
     number *2;
    });

console.log(doubleNumbers);

let cars = [
    {model:"Civic",price:"Cheap"},
    {model:"toyota",price:"expensive"}
];

let prices = cars.map((car)=>{
    return  car.model ;

});

console.log(prices);