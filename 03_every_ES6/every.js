var names=[
    "Muhammad",
    "Shah",
    "Alex",
    "Joe"
];

let everyFun=names.every(function(name){
    return name.length >=3; //Joe;
})

console.log(everyFun,"every");
