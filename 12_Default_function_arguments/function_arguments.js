console.log("running");

function makeAjaxRequest(url,method = "GET"){
   return url + " " + method;
}

console.log(makeAjaxRequest('google.com',undefined));
console.log(makeAjaxRequest('https://google.com', 'POST'));

function User(id){
    this.id = id;
}

function generateId(){
 return Math.random() * 9999999;

}

function createAdminUser(user){
    user.admin = true;
    return user;
}
const user = new User(generateId());

console.log(createAdminUser(user));