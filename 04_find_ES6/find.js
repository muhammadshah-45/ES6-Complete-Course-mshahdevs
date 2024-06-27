console.log("find running");

var users = [
    {name:"Alex"},
    {name:"shah",id:34},
    {name:"Muhammad"},
    {name:"shah",age:20}
];


// for(let i = 0; i < users.length; i++){
//     if(users[i].name === "Muhammad"){
//         var user;
//         user=users[i];

//     }
// }

let user=users.find((user)=> {
    if(user.name === "shah"){
        return true;
    }
//    return user.name === "Muhammad";
}
)
console.log(user);



//Let's Talk about Find continued;

console.log("Find Continued");

 
function Car(model,name){
    this.model = model;
    this.name= name;

}
var cars = [
    new Car("Civic","CivicName"),
    new Car("BUik","BuikCar"),
    new Car("Civic","CivicCar"),
    new Car("Honda","HondaCar"),
];

let carModel = cars.find(function(car){
    return car.model === "Civic"
})

console.log(carModel);

//Let's Talk more complex code for Learning ..

// List of posts 
// where each post had a comment I associate you with it...


var posts = [
    {id:1,title:"New post"},
    {id:2, title:"Old post"}
];

var comment =  {postID : 1 , content: "Great Post"};


function postForComment(posts,comment){
    return posts.find(function(post){
        return post.id=== comment.postID;
    });
}

console.log(postForComment(posts,comment));

