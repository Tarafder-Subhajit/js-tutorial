const name = "Subhajit"
const repoCount = 50

console.log(name + repoCount + " value"); //But this is old style of writing Strings which is not reccomended in modern times.

// In modern times we use String Interpolation using backticks ``.
// Here we make string place-holders and inject the variable whereever needed.
console.log(`My name is ${name} , the repository count is ${repoCount} and the repository belongs to ${name}`)




// Another way to declare strings is using the string object.
const gameName = new String('Subha')
// When we run this string object in chrome console we will see that each letter in the string is mapped to an index. ex: S->0,u->1,b->2,h->3,a->5.
console.log(gameName[0]); //index accessing
console.log(gameName.length); //5
console.log(gameName.toUpperCase()); //SUBHA
console.log(gameName.charAt(2)); //b
console.log(gameName.indexOf('b')); //2

const newSubString = gameName.substring(0,4) //0 will included and 4 will be excluded.
console.log(newSubString); // Subh
// We cannot use -ve indexing in SUBSTRING.

//Slicing
const anotherString = 'hitesh'
console.log(anotherString.slice(0,3));
console.log(anotherString.slice(-8,-4)); // _(-8),_(-7),h(-6),i(-5),t(-4),e(-3),s(-2),h(-1)

//trimmimg
const str2= "   Sub   h   a"
console.log(str2.trim()); // o/p:Sub  h  a : beginning and end spaces are trimmed, not the middle ones.

//replace
const url = "https://subhajit.com/%20subhajitTaraf"
console.log(url.replace('%20','-'))

//includes
console.log(url.includes('subha'))//true

//splits: split(separator), split(separator, limit) : it converts strings to array based on separator.

const str = 'The quick brown fox jumps over the lazy dog.';
const words = str.split(' ');
console.log(words); //['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the',   'lazy', 'dog.']
console.log(words[3]); // fox
const chars = str.split('');
console.log(chars[8]); //k
const strCopy = str.split();
console.log(strCopy);//Array ["The quick brown fox jumps over the lazy dog."]



