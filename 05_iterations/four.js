const myObject = {
    js: "JavaScript",
    cpp: "c++",
    rb: "Ruby",
    swift: "Swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programmingLanguages = ['JavaScript', 'c++', 'Ruby', 'Swift']

for (const key in programmingLanguages) {
    // console.log(key);
    // console.log(programmingLanguages[key]);
}

// maps are not iterable using for in loop
const map = new Map() // creating a map
map.set('IN', "India")
map.set('US', "United States of America")
map.set('FR', "France")
map.set('IN', "India") // duplicate key will be ignored

for (const key in map) {
    // console.log(key); // will not work as expected
}