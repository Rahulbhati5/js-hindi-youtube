//var c = 300
// let a = 300
// if (true) {
//     let  a = 10
//     const b = 20
//     var c = 30
// } 1st conditions

if (true) {
    let  a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "RahulBhati"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if (true) {
    const username = "Rahul"
    if (username === "Rahul") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// ++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++++++

console.log(addone(5)) // function dclearation_1_run

function addone(num){
    return num + 1
}


addTwo(5) // F_Dclration_2 not run
const addTwo = function(num){
    return num + 2
}

