// Immediately Invoked Function Expressions (IIFE)
//study the definition & use cases from mdn docs : https://developer.mozilla.org/en-US/docs/Glossary/IIFE#avoid_polluting_the_global_namespace


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( () => {  //arrow
    console.log(`DB CONNECTED TWO`);
} )()
 
( (name) => { //using vairables
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
