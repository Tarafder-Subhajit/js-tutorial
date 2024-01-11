// JavaScript arrays objects are resizable and can contain a mix of different data types.
// Array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers.
// Array copy operations create Shallow Copies.

const arr1 = [1,2,3,4,5]
const arr2 = new Array(1,2,3,4)

/*PUSH and POP Operation*/
arr1.push(6) // arr1 = 1,2,3,4,5,6
arr1.pop() // arr1 = 1,2,3,4,5

/*UNSHIFT Function -> to add at the beginning of the array
  SHIFT Funtion -> to remove from the beginning of the array*/
arr1.unshift(9) // arr1 = 9,1,2,3,4,5
arr1.shift() // arr1 = 1,2,3,4,5

/* INCLUDES Function returns true/false. */
console.log(arr1.includes(9))

/* INDEXOF Function returns the index of the element. */
console.log(arr1.indexOf(9)) //returns -1 if element is not present in the array
console.log(arr1.indexOf(3)) // 2

/* JOIN Function joins 2 arrays */
// IMP NOTE: The joined array is of type string.
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());
// Expected output: "Fire,Air,Water"
console.log(elements.join(''));
// Expected output: "FireAirWater"
console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"

/*SLICE Function returns a section of an array without manipulating the array(just copy) &
  SPLICE Function returns a section of an array by manipulating the array(just cut) */
console.log("A --> ", arr1); //A -->  [ 1, 2, 3, 4, 5 ]
const myn1 = arr1.slice(1, 3) 
console.log(myn1); // [ 2, 3 ]
console.log("B --> ", arr1); //B -->  [ 1, 2, 3, 4, 5 ]
const myn2 = arr1.splice(1, 3)
console.log("C --> ", arr1); // C -->  [ 1, 5 ]
console.log(myn2); //[ 2, 3, 4 ]
//NOTE: SLICE Operation doesnt include the last higher range value while SPLICE operation includes.



const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
 
// marvel_heros.push(dc_heros) // will include array inside array
// console.log(marvel_heros); // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]); //flash

/* Unlike PUSH Funtion which includes the whole array as an element, CONCAT Funtion merges arrays and returns a new array. */
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros); //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

/* SPREAD Operation includes multiple arrays and returns its individual elements */
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros); //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

/* FLAT returns a new arrays by concatenating all the sub arrays */
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(1) // Depth of 1 denotes to submerge only 1st level subarray.
console.log(real_another_array);
const real_another_array2 = another_array.flat(Infinity) //Depth of infinity denotes to submerge only all level subarray.
console.log(real_another_array2);


/* Check an array and convert it */
console.log(Array.isArray("Hitesh")) //false
console.log(Array.from("Hitesh")) //[ 'H', 'i', 't', 'e', 's', 'h' ]
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));











