console.log("more on ");

const points = [
    [3,2],
    [4,8],
    [5,7]
];

let result =points.map(([x,y]) =>{
    // const [x,y] = pair;
    // console.log("x:",pair[0]);
    // console.log("y:",pair[1]);
    // console.log(pair);
    // return {firstPair:x,secondPair:y};
    return [x,y];
});

console.log(result);