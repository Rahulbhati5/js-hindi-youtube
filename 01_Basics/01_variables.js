const accountId = 144553
let accountEmail = "rahul@google.com"
var accountPassword = "12234"
accountCity = "Jaipur" // you try to not use in most of case
let accountState; 

// accountId = 2 // not allowd

accountEmail ="nd@wd.com"
accountPassword = "21212122"
accountCity = "Bengaluru"


console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([ accountId, accountEmail, accountPassword, accountCity, accountState])
