const name = "rahul"
const repoCount = 50
//console.log(name + repoCount + " Value"); //old way

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('happy_boii_gopi_bahu')

//console.log(gameName[0]);
//console.log(gameName.__proto__);


//console.log(gameName.length);
//console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('p'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);


const newStringOne = "  hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://developer.mozilla.org/en-US/docs%20/Web/JavaScript/Reference/Global_Objects/String/trim"

console.log(url.replace('%20','-'))

console.log(url.includes('sundar'))

console.log(gameName.split('_'));




