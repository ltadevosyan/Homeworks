/*1.
Create an Author class and a Book class.
Author should have: name, email, gender.
It should have appropriate getters and setters.
It should have a toString method.
Book should have: title, author(Author), price, quantity.
It should have appropriate getters and setters.
It should have a method: getProfit(), which calculates the profit from the book based on
the price and quantity.
It should have a toString method.*/

class Author {
    constructor(name, email, gender) {
        this.name = name;
        this.email = email;
        this.gender = gender;
    }
    get name() {
        return this._name
    }
    set name(value1) {
        return this._name = value1
    }
    get email() {
        return this._email
    }
    set email(value2) {
        return this._email = value2
    }
    get gender() {
        return this._gender
    }
    set gender(value3) {
        return this._gender = value3
    }
    toStringAuthor() {
        return `${this.name} - author of books.`
    }
}

class Book extends Author {
    constructor(title, name, price, quantity) {
        super(name);
        this.title = title;
        this.price = price;
        this.quantity = quantity
    }
    get title() {
        return this._title
    }
    set title(val1) {
        return this._title = val1
    }
    get price() {
        return this._price
    }
    set price(val2) {
        return this._price = val2
    }
    get quantity() {
        return this._quantity
    }
    set quantity(val3) {
        return this._quantity = val3
    }
    getProfit() {
       return this.price * this.quantity
    }
    toStringBook() {
        return `The ${this.title} - book authored by - ${this.name}.`
    }
}

let sevak = new Book("Anlreli zangakatun", "Sevak", 5000, 3)


/*2.
Create an Account class. Account should have: id, name, balance.
It should have setters for name and balance, and getters for all fields.
It should have a method: credit(amount), which should add amount to balance and
return the updated balance.
It should have a method: debit(amount), which should subtract the amount from the
balance, if amount is less than the balance, otherwise output “Amount exceeded
balance.”
It should have a method: transferTo(anotherAccount, amount): which should subtract the
amount from the account balance and add it to the given anotherAccount and return the
updated balance, if amount is less than the balance, otherwise output “Amount
exceeded balance.”
It should have a static method: identifyAccounts(accountFirst, accountSecond) which
gets two accounts and identifies if they are the same or not comparing all fields.
It should have toString method.*/


class Account {
    constructor(id, name, balance) {
        this._id = id;
        this.name = name;
        this.balance = balance
    }
    get id() {
        return this._id
    }
    get name() {
        return this._name
    }
    set name(arg1) {
        return this._name = arg1
    }
    
    get balance() {
        return this._balance
    }
    set balance(arg2) {
        return this._balance = arg2
    }
    credit(amount) {
        this.balance += amount
        return this.balance
    }
    debit(amount) {
        if(amount < this.balance) {
            this.balance -= amount
            return this.balance
        } else {
            console.log("Amount exceeded balance.")
        }
    }
    transferTo(anotherAccount, amount) {
        if(amount < this.balance) {
            this.balance -= amount
            anotherAccount += amount
            return this.balance
        } else {
            console.log("Amount exceeded balance.")
        }
    }
    static identifyAccounts(accountFirst, accountSecond) {
        if(accountFirst === accountSecond) {
            return `These accounts are the same․`
        }
        return `These accounts are different․`
    }

    toStringAccount() {
        return `${this.name} - ${this.id} is an account.`
    }
}

let aAccount = new Account(1254, "Tigran", 200000)
let bAccount = new Account(1255, "Hayk", 210000)
Account.identifyAccounts(aAccount, bAccount)


/*3.
Write classes: Person, Student, Staff.
Person should have: firstName, lastName, gender, age.
It should have appropriate getters and setters.
It should have a method: toString().
Student is inherited from Person. It should have programs (array of strings), year, fee.
It should have appropriate getters and setters.
It should have method: passExam(program, grade). Student should contain the data
about its programs and exams. passExam will update that data, so if student passed all
the exams(grade is great or equal to 50), its year should be increased by one.
It should have a toString method.
Teacher is inherited from Person. It should have program(string), pay.
It should have appropriate getters and setters.
It should have a toString method.*/


class Person {
    constructor(firstName, lastName, gender, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age
    }
    get firstName() {
        return this._firstName
    }
    set firstName(value1) {
        return this._firstName = value1
    }
    get lastName() {
        return this._lastName
    }
    set lastName(value2) {
        return this._lastName = value2
    }
    get gender() {
        return this._gender
    }
    set gender(value3) {
        return this._gender = value3
    }
    get age() {
        return this._age
    }
    set age(value4) {
        return this._age = value4
    }
    toStringPerson() {
        return `${this.firstName} - firstName ${this.lastName} - lastName is a person․`
    }
}

class Student extends Person {
    constructor(year, fee, program, firstName, lastName, gender, age) {
        super(firstName, lastName, gender, age)
        this.year = year
        this.fee = fee
        this.program = program
    }
    get year() {
        return this._year 
    }
    set year(val1) {
        return this._year = val1
    }
    get fee() {
        return this._fee
    }
    set fee(val2) {
        return this._fee = val2
    }
    get program() {
        return this._program
    }
    set program(val3) {
        return this._program = val3
    }
    passExam(program, grade) {
        if(grade >= 50) {
            return this.year++
        } 
        return `Did not pass the exam, remained in the same course․`
    }
    feeDiscount(grade, fee) {
        if(grade >= 80 && grade <= 100) {
            this.fee -= (this.fee * 0.2)
            return this.fee
        }
        return `You have not collected enough point to receive a fee discount.`
    }
    toStringStudent() {
        return `${this.firstName} ${this.lastName} studies.`
    }
}

class Teacher extends Person {
    constructor(pay, program, firstName, lastName, gender, age) {
        super(firstName, lastName, gender, age)
        this.pay = pay
        this.program = program
    }
    get pay() {
        return this._pay
    }
    set pay(arg1) {
        return this._pay =arg1
    }
    get program() {
        return this._program 
    }
    set program(arg2) {
        return this._program = arg2
    }    
    toStringTeacher() {
        return `The teacher teaches ${this.program}.`
    }
}