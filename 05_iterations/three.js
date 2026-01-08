// for of loop

// ["","", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
//Objects means in this loop which we are iterating over array of objects
for (const num of arr) { 
    // console.log(num);
}

const greetings = "Hello World"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
}

// Maps

const map = new Map() // creating a map
map.set('IN', "India")
map.set('US', "United States of America")
map.set('FR', "France")
map.set('IN', "India") // duplicate key will be ignored

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
    
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman',
    
}
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);

    
// }