// we can't check for everything at once
// if variable is undefined, 'undefined', NaN, infinity. 
// we must do at different functions

let num =12;
let string = 'hello';
let str = undefined;

// console.log(typeof(num.toString()));
// console.log(string.toUpperCase());
// console.log(str === undefined);

function checkvalidity(obj) {
    if(str === undefined ) return true;
}

if (isNaN(str)) {
    console.log(true);
} else { 
    console.log(false );
}

console.log(checkvalidity(str));