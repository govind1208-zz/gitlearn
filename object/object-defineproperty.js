/* let user1 = {
    name: 'gs',
    age: 21,
    sex : 'male',
    location: 'Delhi'
}

Object.defineProperty(user1, 'age', {value: 27, enumerable: false});
Object.defineProperty(user1, 'sex', {value: 'not disclosing', configurable: false});
Object.defineProperty(user1, 'location', { writable: false}); */



let user1  = {};
Object.defineProperties(user1, 
    { name: { value : 'gs'} }, 
    { age: { value : 21} }, 
    { sex: { value : 'male'} }, 
    { location: { value : 'Delhi'} }, 
)


for (const key in user1) {
    if (user1.hasOwnProperty(key)) {
        console.log(key, ' : ', user1[key]);
    }
}

user1.location = 'Mumbai';     // would have changed if not configured writable property
delete user1.sex;               // would have changed if not configured configurable property

for (const key in user1) {
    if (user1.hasOwnProperty(key)) {
        console.log(key, ' : ', user1[key]);
    }
}