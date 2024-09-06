const array = [
    "Google Inc",
    "Facebook Inc",
    "Apple Inc",
    "Amazon Inc",
];

// const [name, ...rest] = array;
const [name, name1,...rest] = array;

console.log(name1,rest);
// console.log(name); // Outputs: Google Inc
// console.log(rest); // Outputs: Facebook Inc

// let { length } = array;
// console.log(length); // Outputs: Google Inc

const student =[
    "Muhammad Shah",
    344,
    "Computer Science"
]

const [fullName,marks,subject] = student

console.log(fullName ,"\n",marks,subject);

const [lastName,...allData] = student

console.log(allData);