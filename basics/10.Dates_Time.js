// Date Object in JS represents a single moment of time. It is calculated from the beginning of Jan 1st,1970(UTC). It is calculated in milisecond.
let myDate = new Date()
console.log(myDate) //o/p: 2023-12-13T15:53:07.085Z -> not readable. So change in string format.
console.log(myDate.toString()) //o/p:Wed Dec 13 2023 15:54:42 GMT+0000
console.log(myDate.toDateString()) //o/p: Wed Dec 13 2023
console.log(myDate.toISOString()) //o/p: 2023-12-13T15:57:13.809Z
console.log(myDate.toJSON()) //o/p: 2023-12-13T15:57:13.809Z
console.log(myDate.toLocaleString()) //o/p: 12/13/2023, 3:57:13 PM
console.log(myDate.toLocaleDateString()) //o/p: 12/13/2023

let mySpecifiedDate = new Date(2023, 0, 23)  // yyyy/mm/dd -> month starts from 0.
console.log(mySpecifiedDate.toDateString()); //o/p: Mon Jan 23 2023

let mySpecifiedDate2 = new Date(2023, 0, 23, 5, 3)  
console.log(mySpecifiedDate2.toLocaleString()); //o/p:1/23/2023, 5:03:00 AM

let mySpecifiedDateFormat= new Date("07-25-1999") //when we want to specify our own date format
console.log(mySpecifiedDateFormat.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp); // o/p:1702483940641 -> this is the time in ms from 1st jan,1970 till now.

console.log(Math.floor(Date.now()/1000)); // in second by removing the decimals

let newDate = new Date()
console.log(newDate.getDay()); // getMonth() and getYear() also available.

console.log(`and the month is ${newDate.getMonth()}`); // o/p: 11 (December, since numbering starts from 0) using string interpolation.

newDate.toLocaleString('default', {
  weekday: "long"  
})