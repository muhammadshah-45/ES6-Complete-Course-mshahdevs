const products=[
    {name:"tomato",type:"vegetable",quantity:20,price:12},
    {name:"mango",type:"fruits",quantity:1,price:10},
    {name:"potato",type:"vegetable",quantity:30,price:5},
    {name:"apple",type:"fruits",quantity:9,price:8}

];


const filteredProducts=products.filter(function(products){
    return products.type === "fruits" && products.quantity >=0 && products.price < 10;
});

console.log(filteredProducts);

// Create an Object
const post = {id:4,title:"New Post"};



//Define an array with comments 
let comments = [
    {postId: 4, content: "awesome post"},
    {postId: 7, content: "neat"},
    {postId: 30, content: "it was okay"},
    {post}
];

function commentsForPost(post,comments){
    console.log(post);
    console.log(comments,"line29");
    return comments.filter(function(comment_11){
        console.log(comment_11.postId);
        return comment_11.content ==="neat";
    });
};

console.log(commentsForPost(post,comments));

let fruits = ["tomato","potato","cucumber","sauce","ketch"];

const words = fruits.filter(function(word){
    return word.length >= 6;
});

console.log(words);

//How to find all prime numbers'
// lemme clarify with this code step by step


const array=[-1,-2,-3,-4,-5,0,1,2,3,4,5];
console.log(array.entries);

function isPrime(number){
    // console.log(number);
// console.log(`checking if ${number} is prime numm....`);
    for(let i = 2; number > i; i++ ){
        // console.log(`i:${i} Number:${number}`);

        // console.log(`checking  if numm ${number} is divisible by i:${i}`);
        if(number % i === 0){
            // console.log(`if statement i is :${i} and Number: ${number}`);
            // console.log(`${number} is divisible by ${i},so it's not prime numm..`);
            return false;
        }
        // console.log(`${number} is not divisible by any number, so its Prime Number`);

    }
    // console.log(`function return ${number}`);
    return number > 1;
}
console.log(array.filter(isPrime));// 

// const array = [-1,-2,-3,-4,-5,0,1,2,3,4,5];

// function isPrime(number){
//     console.log(`Checking if ${number} is prime...`);
//     for(let i = 2; number > i; i++ ){
//       console.log(`  Checking if ${number} is divisible by ${i}...`);
//       if(number % i === 0){
//         console.log(`  ${number} is divisible by ${i}, so it's not prime.`);
//         return false;
//       }
//     }
//     console.log(`  ${number} is not divisible by any number, so it's prime!`);
//     return number > 1;
//   }
  
// //   Now, let's run the code with the original array:
  
//   console.log(array.filter(isPrime));


const arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    {},
    {id:5},
    { id: null },
    { id: NaN },
    { id: "undefined" },
  ];

//   console.log(`arr:${arr}`);
  let invalidEntries = 0;
  
  function filterByID(item) {
    // console.log(`item:${item}`);
    if (Number.isFinite(item.id) && item.id !== 0) {
        console.log(`item.id:${item.id}`);
        
      return true;
    }
    invalidEntries++;
    
    return false;
  }
  
  const arrByID = arr.filter(filterByID);
  
  console.log("Filtered Array", arrByID);
  // Filtered Array
  // [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]
  
  console.log("Number of Invalid Entries =", invalidEntries);
  // Number of Invalid Entries = 5
  
  const fruits_1 = ["apple", "banana", "grapes", "mango", "orange"];

  /**
   * Filter array items based on search criteria (query)
   */
  function filterItems(arr, query) {
    console.log(`arr:[${arr}]`);
    console.log(`query:[${query}]`);
    return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
  }
  
  console.log(filterItems(fruits_1, "ap")); // ['apple', 'grapes']
  console.log(filterItems(fruits_1, "an")); // ['banana', 'mango', 'orange']
  console.log(filterItems(fruits_1,"p"));
  console.log(filterItems(fruits_1,"a"));

//for Vegetables in Array to Filtered 

const vegetables1=["tomato","Lady finger","peas","Radish","cauliflower","onions"];

function filterVegetables_1(item,query){
    return item.filter((itemName)=> itemName.toLowerCase().includes(query.toLowerCase()))
};

console.log(filterVegetables_1(vegetables1,"er"));




//for Object Arrays (Vegetables)

const vegetables =[
    {name:"tomato",color:"red"},
    {name:"potato",color:"brown"},
    {name:"chilli",color:"green"},
    {name:"carrot",color:"blurish"}
];

function filteritem(arr,query){
    console.log(arr);
    console.log(query);
    return arr.filter((el)=> el.color.toLowerCase().includes(query.toLowerCase()))
}
console.log(filteritem(vegetables,"red"));





