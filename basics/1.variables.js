// 4 ways: 'var', 'let', 'const' and direct

const accountID = 2234323 //When we use const keyword, we cannot change that variable values
// accountID = 2; is not possible

console.log(accountID);

let accountEmail = "subhajit@google.com"
var accountPaswrd = "qw23223"
accountCity = "Kolkata"

//rather than doing "console.log" for each variable, we can use "console.table"
console.table([accountID,accountEmail,accountPaswrd,accountCity])


// After 2015, it is advisable not to use "var" keyword for storing variables because of its issue in block and func scope

// we can also just define variables without assigning any value
let accouctState // type will be "undefined"
console.table([accountID,accountEmail,accountPaswrd,accountCity, accouctState])



