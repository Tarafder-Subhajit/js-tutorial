
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

 //sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

 //console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){ //spread or rest operator to handle multiple parameters
    return num1
}

 //console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)

handleObject({ //We can create object while sending it as parameter to func handleObject() also.
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray
}
 console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

/*Another way to declare a function is to use expression funtion using a variable */
const demo = function(){
    
}

// ++++++++++++++++++ interesting point to notice ++++++++++++++++++


console.log(addone(5)) //will not give error even if we have called function before the declaration.

function addone(num){
    return num + 1
}



addTwo(5) ////will give error if we have called function before the declaration because there is variable declaration.

const addTwo = function(num){
    return num + 2
}