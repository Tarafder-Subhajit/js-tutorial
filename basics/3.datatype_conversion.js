/* ===================CONVERT BOOLEAN/STRINGS TO NUMBER=========================*/

score = 33 //this is number
console.log(typeof(score)) // console.log(typeof score) both are same
score2 = "33" //this is string
console.log(typeof(score2))

//to convert string to number
toNumber = Number(score2)
console.log(typeof toNumber);

//Nan= Not a Number. Arises when we convert a string to numbers consisting of alphabets also. It will be converted to number but of type NaN.
//"23" => 23
//"23abs" => NaN (of type number)
// true/false => 1/0
//null => 0
// undefined => NaN
let num= "23aa"
console.log(typeof num)
let num2 = Number(num)
console.log(typeof num2)
console.log(num2)



/* ===================CONVERT NUMBER/STRINGS TO BOOLEAN=========================*/
let isLoggedIn = 1
let boolisLoggedIn = Boolean(isLoggedIn)
console.log(boolisLoggedIn);

let str = "dhsbdjasbn"
let str2 = ""
let boolstr = Boolean(str)
let boolstr2 = Boolean(str2)
console.log(boolstr);
console.log(boolstr2);

// so 1 => true, 0 => false, "dbhb" => true, "" => false



/* ===================CONVERT NUMBER/BOOLEAN TO STRINGS=========================*/
let someNum = 32
let someNumToStr = String(someNum)
console.log(typeof someNum);
console.log(typeof someNumToStr);

