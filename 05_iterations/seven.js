const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newmyNumbers = myNumbers.map((num) => num +10);
// console.log(newmyNumbers);
// Output: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// with curly braces and return statement: 
// const newmyNumbers = myNumbers.map((num) => {return num +10});

const newmyNumbers = myNumbers
                    .map((num) => num * 10)
                    .map((num) => num + 1)
                    .filter( (num) => num >= 40);

console.log(newmyNumbers);