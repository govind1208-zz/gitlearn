let user1 = {
    name: 'gs',
    age: 21,
    sex : 'male',
    get(){
        return user1;
    },
    set(userDetails){
        this.name = userDetails.name;
        this.sex = userDetails.sex;
        this.age = userDetails.age;
    }
}

let user2 = {
    name : 'mamta',
    sex: 'female',
    age :33
}

console.log(user1.name);
user1.set(user2);
console.log(user1.get().name);