const accountId = 144553
let accountEmail = "adeelarshad.developer@gmail.com"
var accountPassword = "334455"
accountCity = "Lahore"
let accountState;

// accountId = 2 // not allowed

// the value will be udated as we have assigned values to variable again
accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Islamabad"
// it will show nothing
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])