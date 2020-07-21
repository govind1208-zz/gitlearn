let user1= {
    name: 'gs', 
    age: 21,
    intro : function(){
        console.log('hello there');
    }
}

let user2 = {
    education: 'higher'
}

let user3 = Object.create(user1);

console.log('user1 :',user1);
console.log('user3 :',user3.name);
console.log('user3 :',user3.name.toUpperCase());

console.log('through created object functioncall:',user3.intro());

console.log('user21 :', Object.getPrototypeOf(user3));
console.log('user22 :', Object.getPrototypeOf(user3)===user1);

console.log('user2 data:',user2.intro);
console.log(Object.setPrototypeOf(user3,user2));
console.log('user21 :', Object.getPrototypeOf(user3));
console.log('checking :',Object.is(user1,user3));
