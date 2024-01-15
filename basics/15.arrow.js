const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); // this user is used to point to the current context variable inside the scope of an object.
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); //will return {} because there is no current context variable

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); //will throw error because this doesnt work inside funtions
// }
// chai()

/* *****************************Arrow Functions************************************** */
const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => { //IMPLICIT RETURN
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 //EXPLICIT RETURN

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"}) //Using Objects


console.log(addTwo(3, 4))



