//=================================================================================================
//                                NUMBERS 
//=================================================================================================

const score = 200 //Variable "score" is defined as of type number during runtime.
const score2 = new Number(200) //Variable "score2" is specifically typecasted as number.

console.log(score2.toFixed(2)) //o/p:200.00 ->useful in e-commerce website

const hundred = 1000000
console.log(hundred.toLocaleString()); // o/p:1,000,000 -> default is us format
console.log(hundred.toLocaleString('en-IN')); //o/p: 10,00,000 -> In INDIAN format


//=================================================================================================
//                                MATHS
//=================================================================================================

console.log(Math); //o/p: Object[Math]{} -> The JavaScript Math object allows you to perform mathematical tasks on numbers.
console.log(Math.abs(-4)) //o/p: 4
console.log(Math.round(4.5647)) //o/p: 5
console.log(Math.ceil(4.2)) //o/p: 5 ->rounds to the upper value
console.log(Math.floor(4.2)) //o/p: 4 ->rounds to the lower value
console.log(Math.trunc(777.64576776)) //o/p: 777 -> returns the integer part
console.log(Math.max(2,-3,5,7)); //o/p:7 -> returns the max number. Math.min is also there.

//Random function (IMP)
console.log(Math.random()) //Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)
console.log(Math.random()*10);// to get random number between 0 to 9
console.log((Math.random()*10)+1);// to get random number between 1 to 9
console.log(Math.floor(Math.random()*10)+1);// to get random number between 1 to 9 without decimal places
//there can be cases where we have to define the minimum and maximum value between which we need random numbers.
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min);