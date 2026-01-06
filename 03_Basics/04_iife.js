// Immediately Invoked Function Expression (IIFE)

// 1.one way to define a function 
function chai() {
    // named iIFE
    console.log(`DB CONNECTED`);
}
// chai();

// 2.another way to execute function immediately

(function chai() {
    // named IIFE 
    console.log(`DB CONNECTED`);
})();

// 3.arrow function IIFE
((name) => {
    console.log(`DB CONNECTED Two ${name}`);
})('Rahul');

// Note: IIFE is used to create a new scope and avoid polluting the global namespace.
// It is commonly used in JavaScript for module pattern and to encapsulate code.