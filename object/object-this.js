let user = {
    name : 'gs',
    age: 21,
    checkingthis() {
        console.log('from checkingthis: ', this.name);
    }
}

user.checkingthis();

function sayage() {
    console.log('from sayage: ',this.age);
    // console.log('from sayhi1: ',this);
}

user.h = sayage;
user.h();
// user.checkingthis();