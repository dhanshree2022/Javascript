class Bank {
    acc_number;
    acc_holder_name;
    #amount;

    constructor(ac_no, ac_name, amt) {
        this.acc_number = ac_no;
        this.acc_holder_name = ac_name;
        this.#amount = amt;
    }

    displayAccInfo() {
        console.log("Account Number", this.acc_number);
        console.log("Account Holder Name", this.acc_holder_name);
    }
    #displayAmount() {
        console.log(this.#amount);
    }
    dispalyAll() {
        this.displayAccInfo();
        this.#displayAmount();
    }
}

class Account extends Bank {
    acc_type;
    #rate;

    constructor(acc_number, acc_holder_name, amt, acc_type, r) {
        super(acc_number, acc_holder_name, amt);
        this.acc_type = acc_type;
        this.#rate = r;
    }

    getAccInfo() {
        this.dispalyAll();
        console.log(this.acc_type);
    }

    set rate(r) {
        this.#rate = r;
    }

    get rate() {
        console.log(this.#rate);
    }
}
let a1 = new Account('123', 'Dahnshree', 8, 'saving')
a1.getAccInfo();
a1.rate = 10;
a1.rate;

// let b = new Bank('1234','Dhanshree Shinde','Saving',5000);
// b.displayAccInfo();






class firstClass {
    add() {
        console.log("This class call First ")
    }
}
class secondClass extends firstClass {
    add() {
        console.log(30 + 40);
    }
}
class thirdClass extends secondClass {
    add() {
        console.log("This call last")
    }
}
let ob = new firstClass();
let ob2 = new secondClass();
let ob3 = new thirdClass();
ob.add();
ob2.add();
ob3.add();




class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    // Abstract method
    drive() {
        throw new Error("Abstract Drive method");
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model);
        this.year = year;
    }

    drive() {
        console.log(this.year, this.make, this.model);
    }
}


let car = new Car("Toyota", "Camry", 2023);

car.drive();
