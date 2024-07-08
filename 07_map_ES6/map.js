//Let's Start with map() method

let numbers = [2, 4, 5, 6, 7];

// let doubleNumbers = [];

// for(let i=0; i<numbers.length; i++){
//     doubleNumbers.push(numbers[i]*2);
// }

// let doubleNumbers=numbers.map((number)=>{
//      number *2;
//     });

// console.log(doubleNumbers);

let cars = [
  { model: "Civic", price: "Cheap" },
  { model: "toyota", price: "expensive" },
];
let carModels = cars.map((car) => {
  return car.model;
});
console.log(carModels);

const kvArray = [
  { key: 1, name: "Shah" },
  { key: 2, name: "Muhammad" },
  { key: 3, name: "devs" },
];

const reformattedArray = kvArray.map(({ key, name }) => ({ [key]: name} ));

// const reformattedArrays = kvArray.map(({ key, value }) => {
//   // console.log([key="name"]);
//   // console.log(value="umair");
//   return { [key]: value };
// });
// console.log(reformattedArrays);
console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
console.log("line41");
console.log(kvArray);
// [
//   { key: 1, value: 10 },
//   { key: 2, value: 20 },
//   { key: 3, value: 30 }
// ]

let mobilePhones = [
  { model: 2021, company: "samsung" },
  { model: 2014, company: "apple" },
  { model: 2022, company: "htc" },
];

const mobiles = mobilePhones.map(function (mobileModel) {
  return mobileModel.company.length >= 5 ;
});
console.log(mobilePhones);
console.log(mobiles);
