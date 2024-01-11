// Objects are made by 2 ways: using constructor(singleton is made) and using literals(singleton is not made)
// Using Constructor: const user = new Object()

//Using Literals
const JsUser = {
    name: "Hitesh", //key:value
    "full name": "Hitesh Choudhary",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
//2 ways to access JS elements
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])// here we cant use '.'

//Challenge: Create a Symbol Datatype and use the symbol as a key in an object
const mySym = Symbol("key1") 
const keyObjt = {
    name:"my-key",
    //mySym:"my-key1" --> this is wrong way to access symbol. here "mysym" is of type string, not symbol.
    [mySym]: "mykey1" //way to access symbol
}
console.log(keyObjt[mySym])

/* add functions in an object */
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); //'this' keyword is used to refer to the elements of the same object
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

/*Freeze the contents of the object */
JsUser.email = "hitesh@chatgpt.com" //email will change
Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com" // error will not occur but email will not change
console.log(JsUser);


const tinderUser = {} //we can create object without any elements also and add then later on
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); //retrieve keys. It is returned in the form of an array.
// console.log(Object.values(tinderUser)); //retrieve values. It is returned in the form of an array.
// console.log(Object.entries(tinderUser)); //retrieve keys-value entries. It is returned in the form of an array.
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //checks the availability of keys.

const regularUser = { //nested objects
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

/* Combine Objects */
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
// const obj3 = { obj1, obj2 } --> obj3 will contain 2 keys i.e. obj1 and obj2. It will not combine the objects at element level.
// const obj3 = Object.assign(obj1, obj2, obj4) --> this will combine objects at element level. But 'obj1' is source and rests are destination parameter. So obj2,obj4 will get combined in obj1. This is not a good practice. So we use '{}' as source parameter.
const obj3 = Object.assign({}, obj1, obj2, obj4) 
const obj5 = {...obj1, ...obj2} //most this way is used.
// console.log(obj3);

/* Whenever data comes from Databases, it comes in the form of array of objects */
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
users[1].email
// console.log(tinderUser);


/* Object De-Structure  VVV-IMP */
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
// course.courseInstructor --> one way to access.
const {courseInstructor} = course // const {property/key name to access} = object name
// console.log(courseInstructor);
const {courseInstructor: instructor} = course // we can rename the key using ":"
console.log(instructor);

