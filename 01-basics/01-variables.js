const accountId = 144596
let accountEmail = 'hitesh@google.com'
var accountPassword = '1223450'
accountCity = 'jaipur'

// accountId = 2 Not Allowed
accountEmail = 'hitesh@google.com'
accountPassword = '1223450'
accountCity = 'bengluru'

console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope

*/


console.table([accountEmail,accountPassword,accountCity])