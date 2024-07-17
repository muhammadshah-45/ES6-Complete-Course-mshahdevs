//fat Arrow Function
const arrow = (a,b) => a + b;

console.log(arrow(1,2));

const mshahfunction = (a,b) =>{
    return a + b;
}
console.log(mshahfunction(1,3));

const arrow_1= (a,b)=>{
    const sum = a + b;
    return sum;
}
console.log(arrow_1(2,5));

const arrow_2 = (a,b)=>{
    return a + b;
}
const newSum = arrow_2(2,1);
console.log(newSum);

const double = number => {
    return 2 * number;
}
console.log(double(2));

const double_1 = (number => 2 *number);
console.log(double_1(3));

const team = {
    members :["Muhammad","shah"],
    teamName:"Web Developer",
    teamSummary: function(){
        var self= this;
        return this.members.map(function(member){
            return  `${member} is on team ${self.teamName}`;
    });
    }
}
console.log(team.teamSummary());

const doubles= (number) => number*2;
console.log(doubles(2));

