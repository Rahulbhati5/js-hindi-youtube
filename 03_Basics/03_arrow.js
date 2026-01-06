const user = {
    username: "Rahul",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Rahul"
//     console.log(this.username);
// }

// chai()

// const chai = function chai () {
//     let username = "Rahul"
//     console.log(this.username);
// }

const chai = () => {
    let username = "Rahul"
    console.log(this);
}

// chai()

// const addtwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2) 

// const addTwo = (num1, num2) => ( num1 + num2) 

const addTwo = (num1, num2) => ({username: "Rahul"}) //right way to return object from arrow function

console.log(addTwo(3, 4))

// const myArray = [2, 3, 4, 5, 6] // work on letter array

// myArray.forEach()// work on letter array