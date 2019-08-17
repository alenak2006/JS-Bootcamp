
function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
        return true;
    }
}
console.log(isPrime(10));

//Show all prime numbers is the range
function showPrime(number) {
    for (let i = 2; i <= number; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

showPrime(25);

function Account(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Account.prototype.greet = function () { return `Hello ${this.firstName} ${this.lastName}` };

function Admin(firstName, lastName, sites) {
    Account.call(this, firstName, lastName);
    this.sites = sites;

}
Admin.prototype = Object.create(Account.prototype);
Admin.prototype.constructor = Admin;
Admin.prototype.greet = function () {
    console.log('Admin');
    return Account.prototype.greet.call(this);
}

function User(firstName, lastName, balance) {
    Account.call(this, firstName, lastName);
    this.firstName = 'User';
    this.balance = balance;
}

User.prototype = Object.create(Account.prototype);
User.prototype.constructor = User;
User.prototype.greet = function () { return `Howdy ${this.firstName}` };

// Admin.prototype = Account.prototype;
// Admin.prototype.constructor = Admin;

let account1 = new Account('mark', 'bark', [',/rest', './homes']);
let admin1 = new Admin('pete', 'troot', [',/ret', './home']);
let user1 = new User('use', 'users', [',/retsdf', './homefsf']);
console.log(account1);
console.log(admin1);
console.log(user1);