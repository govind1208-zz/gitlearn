var user1 = {
    name: 'gs',
    age: 21,
    sex: 'Male',
    location: 'Mumbai'
};
var user2 = {
    name: 'ms'
};

// checking existence  
console.log('checking value: ', "location" in user1)
var obj1 = {};

// Method 1
for (var key in user1) {
    /* if (Object.prototype.hasOwnProperty.call(user1, key)) {
        obj1[key] = user1[key];
    } */
    obj1[key] = user1[key];
}
console.log(obj1);
var obj2 = {};

// Method 2
Object.assign(obj2, user2);
console.log(user2);
// Object.assign(obj2, user1, user2);
// console.log(obj2);

// Method 3
function getObject(obj){
    // return obj;
    // return {
    //     name: 'ms'
    // }
}

user4 = {};
user4=  getObject(user1);
console.log('user4: ', user4);

// checking reference user1 and user4

// console.log(user1 === user4);
// console.log(user1 === user2);

console.log(Object.is(obj2, user2));
