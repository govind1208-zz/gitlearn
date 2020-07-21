let obj11 = { string : 'hi'}
let obja= new Object(12);
let objm= new Object('test');
let objb = {
    Number: 14
}
let objc= new Object(null);

let user1 = {
    name : 'gs', 
    age: 21,
    intro: function(){
        console.log('hello there');
    }
}

console.log(user1);
delete user1.age;
console.log(user1);