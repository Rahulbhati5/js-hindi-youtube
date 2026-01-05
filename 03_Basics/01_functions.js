function sayMyName(){
     console.log("R");
     console.log("A");
     console.log("H");
     console.log("U");
     console.log("L"); 
}
// sayMyName()

// function addTwoNumbers(number1, number2){
//      console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
     // let result = number1 + number2
     // return result

     return number1 + number2
}


const result = addTwoNumbers(3, 4)

// console.log("Result: ", result);

function loginUserMessage(username = "sam"){
     if(!username){ //if(username === undefined) both are same
          console.log("Please enter a username");
          return
     }
     return `${username} just logged in`
} 

// console.log(loginUserMessage("Rahul"))
// console.log(loginUserMessage("Rahul"))

function calculateCartPrice(val1, val2, ...num1){
     return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
     username: "hitesh",
     prices: 199
}
function handleObject(anyObeject){
     console.log(`Username is ${anyObeject.username} and price is ${anyObeject.price}`);

}
// handleObject(user)
handleObject({
     username: "sam",
     price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
     return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 400, 1000]));