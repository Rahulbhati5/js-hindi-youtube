// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp =  null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 2134134314142343242344324234234324n



// Reference (Non primitive)

// Array, Objects(if you want to master in js focus on this), Functions

const heros = ["shaKtiman", "naagraj", "doga"];
let myOBj = {
    name: "rahul",
    age: 24,

}

const myfunction = function(){
    // console.log("Hello world");
}

//console.log(typeof bigNumber);

// console.log(typeof heros );

//https://262.ecma-international.org/5.1/#sec-11.4.3


// ++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap(NoN-Primitive)

let myYoutubename = "RahulBhatiDot.com"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "Rahul@google.com"

console.log(userOne.email);
console.log(userTwo.email);