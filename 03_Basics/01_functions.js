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
console.log(loginUserMessage("Rahul"))