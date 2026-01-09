// const coding = ['JavaScript', 'Python', 'C++', 'Java', 'Ruby'];


// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item;// for each loop does not return anything
// })

// console.log(values); // undefined


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter( (num) => num > 4); // filter returns a new array based on condition

// const newNums = myNums.filter( (num) => {
//      return num > 4 // return is necessary here if using curly braces 
// });


// const newNums = [];

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num);
//     }
// });

// console.log(newNums);


const books = [
    {title: 'Book One', genre: 'Fiction', author: 'Author A', publish:1981, edition:2007},
    {title: 'Book Two', genre: 'Non-Fiction', author: 'Author B', publish:1995, edition:2015},
    {title: 'Book Three', genre: 'History', author: 'Author C', publish:2000, edition:2012},
    {title: 'Book Four', genre: 'Non-Fiction', author: 'Author D', publish:2005, edition:2020},
    {title: 'Book Five', genre: 'Science', author: 'Author E', publish:2010, edition:2018},
    {title: 'Book Six', genre: 'Fiction', author: 'Author F', publish:2015, edition:2005},
    {title: 'Book Seven', genre: 'History', author: 'Author G', publish:2020, edition:2021},
    {title: 'Book Eight', genre: 'Science', author: 'Author H', publish:2015, edition:2010},

];

let userBooks = books.filter( (bk) => bk.genre === 'History' );

userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === 'History'
} );

console.log(userBooks);


