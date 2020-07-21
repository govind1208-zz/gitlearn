/* 
Object.assign not working here in this ts, but working in JS so not working with
ts now, and so won't continue with ts 
 */

var user1:Object = {
    name: 'gs',
    age: 21,
    sex: 'Male',
    location: 'Mumbai'
};

let user2:Object = {
    name: 'ms'
}
var obj1:Object = {};
for (var key in user1) {
    /* if (Object.prototype.hasOwnProperty.call(obj1, key)) {
        obj1[key] = user1[key];
    } */
    obj1[key] = user1[key];
}

console.log(obj1);
var obj2 = {};
Object.assign(obj2, user2);
console.log(user2);

Object.assign(obj2, user1, user2);
console.log(obj2);