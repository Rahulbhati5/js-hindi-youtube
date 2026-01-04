// singleton
// Object.create// learn in future

//obeject literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Rahul",
    "full name": "Rahul Bhati",
    [mySym]: "mykey",//symbol declaretion
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "rahulbhati@gpt.com"
// Object.freeze(JsUser); // when do freeze then changes not applicable
JsUser.email = "Rahulbhai@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}

console.log(JsUser.greeting());
// console.log(JsUser.greeting); //[Function (anonymous)]
console.log(JsUser.greetingTwo()); 
