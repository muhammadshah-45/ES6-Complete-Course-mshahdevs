console.log("when to use Destructuring");


function signUp({dateOfBirth,email,username,password:pass}) {
   //Create a new user 
   const  newUser ={
       username,
       password:pass,
       dateOfBirth,
       email,
   }
   console.log(username);
   console.log(Number(pass));
   return  newUser;
}

const user ={
    username:"mshah",
    dateOfBirth:"26/04/2005",
    password:"123456",
    email:"mshah@gmail.com",
}

console.log(signUp(user));