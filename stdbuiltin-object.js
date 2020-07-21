let user1 = {
    name :'gs'
}
let user2 = {
    name :'gs'
}

let user3 = user1

if(NaN==NaN) console.log('true');
console.log(parseInt('100px'));

console.log('\tusing ===');
console.log(user1 === user2);
console.log(user1 === user3);

console.log('\tusing Object is');
console.log(Object.is(user1, user2));
console.log(Object.is(user1, user3));