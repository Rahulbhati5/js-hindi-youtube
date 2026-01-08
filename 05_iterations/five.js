const coding = ['JavaScript', 'Python', 'C++', 'Java', 'Ruby'];

// coding.forEach(function (val){
//     console.log(val);
// })


// coding.forEach( (item) => {
//     console.log(item);
// })


// function printMe(item){
// console.log(item);
// }
// coding.forEach(printMe);


// coding.forEach((item, index, arr)=> {
//     console.log(item, index, arr);
// })


const myCoding = [
    {
        languageName: 'JavaScript',
        languageFileName: 'js'
    },
    {
        languageName: 'Python',
        languageFileName: 'py'
    },
    {
        languageName: 'C++',
        languageFileName: 'cpp'
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    
})