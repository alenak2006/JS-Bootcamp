
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        User.instanceCount++;
    }

    static staticUserCount() {
        return User.instanceCount;
    }

    get salary() {
        return `${this._salary || 0}`;

    }

    set salary(salary) {
        this[_salary] = salary;
    }
}


User.instanceCount = 0;
const _salary = Symbol("_salary");

class Teacher extends User() {

    constractor(firstName, lastName, age, subject) {
        super(firstName, lastName, age);
        this.subject = subject;
    }

    userCount() {
        console.log('show');
        return super.userCount();
    }
}

let u1 = new User('test', 'test', 32);
console.log(u1);