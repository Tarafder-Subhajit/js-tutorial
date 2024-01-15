//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}
// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"
    function two(){
        const website = "youtube"
        console.log(username); // child scope can access the parent scope variable but parent cant access the child scope variable.
    }
    // console.log(website);
     two()
}
// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


