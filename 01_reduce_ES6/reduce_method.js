let numbers = [10,20,30];
let sum = 0;
for(let i = 0; i < numbers.length; i++){let all = sum += numbers[i]; console.log(all);};

let all = numbers.reduce( (sum,number) =>{
    return sum + number;
},0); 

console.log(`The reduce method : ${all}`);

console.log("Project with reducer function");



let primaryColors = [
    {color:"red",name:"warning"},
    {color:"green",name:"go"},
    {
     color:"blue",name:"stop"
    }
];

  

let colorProject=primaryColors.reduce((previous,primaryColor)=>{
    previous.push(primaryColor);
    

    return previous; 

},[]);

console.log(colorProject);

//

// function balancedParens(string){
// return !string.split("").reduce(function(previous,char){
//     if(char === "("){return ++previous;}
//     if(char === ")"){return --previous;}
// },0)
// }

// function balancedParens(string) {
//     return string.split("").reduce((count, char) => {
//       count += (char === "(") ? 1 : (char === ")") ? -1 : 0;
//       return count;
//     }, 0) === 0;
//   }

function balancedBoolean(string){
    //Defines a function named balanceBoolean that takes a string argument.
    return !string.split("")
    //splits the input string into an array of individual characters using (split("").).but here's ! exclamation mark negates the result value (True,false).without ! it will be execute numbers.
    .reduce(function(count,char){
        if(char === "("){ return ++count;}
        if(char === ")"){return --count;};
        // return count;
    },0);
}

balancedBoolean(
    "())"
)
// balancedParens("((((");
// balancedParens(")(");

function valueBoolean(string){
    return !string.split("").reduce(function(count,char){
        
        if(count < 0){return count;}
        if(char === "(")
         {return ++count}
        if(char === ")"){
            return --count;
        }
    },0);
}

valueBoolean("()()");

console.log("-------Redcue--------");
const array=[2,3,4,5,6];

function reducer(accumulator,currentValue,index){
    const returns = accumulator + currentValue;
    console.log(`accumulator ${accumulator},currentValue:${currentValue},index:${index},returns:${returns}`,

    );
    return returns;
}
array.reduce(reducer);

console.log("----------sum of values in Object arrays ----------");

const objects= [{x:1},{x:2},{x:3}];
const add= objects.reduce((accumulator,currentValue) => accumulator + currentValue.x,0);

console.log(add);