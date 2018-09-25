//global scope
var x = 5;
var a = 1;
let b = 2;
const c = 3;

function test(){
    var a = 4;
    let b = 5;
    const c  = 6;
    console.log("Function scope ", a, b, c);
}

test();

if(true) {
    var a = 7;
    let b = 8;
    const c  = 9;
    console.log("Block scope ", a, b, c);
    //a changes to 7 even in global. let and const work like normal languages.
}

for(let x = 0; x < 10; x++){
    console.log(`Loop scope , ${x}`);
}

console.log("Global scope ", a, b, c, x);
