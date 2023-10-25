// class concept in oops
//Inheritance Example
//pareent calss (base class)
class Employee {
    id;
    name;
    salary;

    //initialize  it call when object is create
    constructor(i, n, s) {
        this.id = i;
        this.name = n;
        this.salary = s;
    }

    // method(behaviour)
    getAllInfo = () => {
        console.log(this.id, this.name, this.salary);
    }
}

let e1 = new Employee(101, 'Dhanshree', 1000);
console.log(e1.salary);
e1.getAllInfo();

//child calss (derived class)
class Bonus extends Employee {
    bonusAmt;
    per;

    constructor(id, name, salary, per) {
        //pass value to the parent class
        super(id, name, salary);
        this.per = per;

    }

    calculateBonus = () => {
        let b = this.salary * this.per;
        console.log("Your Bouns is:", b);
    }
}

let b1 = new Bonus(102, 'Soni', 15000, 0.10);
b1.getAllInfo();
b1.calculateBonus();

//Computer Information
class Computer {
    name;
    company;
    price;

    constructor(n, c) {
        this.name = n;
        this.company = c;
    }

    setPrice(p) {
        this.price = p;
    }

    basicDetail = () => {
        console.log(this.name, this.company,this.price);
    }
    
}


let c1 = new Computer("Lenovo Ideapad-3", "Lenovo");
c1.setPrice(55000); 
c1.basicDetail(); 

class Processor extends Computer {
    procssName;
    version;

    constructor(name, company, price, procssName, version) {
        super(name, company, price);

        this.procssName = procssName;
        this.version = version;
    }

    allDetails = () => {
        console.log(this.name, this.company, this.price,this.procssName,this.version);
    }

}

let p1 = new Processor("HP-Pavilion", "HP", 60000,"intelCore","i5");
p1.allDetails();
p1.basicDetail();

console.log(this.basicDetail);




class Car {
    modelName;
    manfYear;
    price;
    company;

    constructor(modelName,company){
        this.modelName = modelName;
        this.company = company;
    }

    displayInfo = () =>{
        console.log(this.modelName,this.company)
    }

}

class eCar extends Car{
    batteryCapacity;
    chargingTime;

    constructor(batteryCapacity, chargingTime){
        super(this.modelName,this.price,this.manfYear)

        this.batteryCapacity = batteryCapacity;
        this.chargingTime = chargingTime;
    }
    

    allInfo() {
        console.log(this.batteryCapacity,this.chargingTime,this.modelName);
    }

    
}

let car1 = new Car("wagnar","Suzuki");
car1.displayInfo();

let electricCar = new eCar("Tesla Model 3", "Tesla", 75, 6);
electricCar.allInfo();
