// //An Object is a unique entity that contains properties and methods

// //class is spcl type of function
// class Employee {
//     //Initializing an object
//     constructor(id, name) {
//         this.id = id;
//         this.name = name;
//     }
//     //Declaring method
//     detail() { 
//         console.log("class", this.id + " " + this.name)
//     }
// }
// //passing object to a variable 
// let e1 = new Employee(101, "Dhanshree Shinde");
// let e2 = new Employee(102, "Soni");
// e1.detail(); //calling method
// e2.detail();

// //object
// //A javaScript object is an entity having state and behavior (properties and method)
// //1object using object itral
// student = { id: 1, name: "dhanshree Shinde", percentage: 85 }
// document.write(student.id + " " + student.name + " " + student.percentage);

// //2object creating instance

// let emp = new Object();
// emp.id = 101;
// emp.name = "Dhanshree";
// emp.salary = 50000;
// console.log("object creating instance", emp.id + " " + emp.name + " " + emp.salary);

// //3 object used by constructor

// class test {
//     constructor(id, name, salary) {
//         this.id = id;
//         this.name = name;
//         this.salary = salary;
//     }
// }
// e = new test(103, "ankita patel", 30000);

// console.log("object used by constructor", e.id + " " + e.name + " " + e.salary);



// //inheritance    ---- create class on that basis exist other class 
// class Bike  
// {  
//   constructor()  
//   {  
//     this.company="Honda";  
//   }  
// }  
// class Vehicle extends Bike {  
//   constructor(name,price) {  
//     this.name=name;  
//     this.price=price;  
//   }   
// }  
// let v = new Vehicle("Shine","70000");  
// document.writeln(v.company+" "+v.name+" "+v.price);  

// encapsultion//abstraction//polymorphisms



/// encapsulatoion   it is a process of binding the data with the functions acting on that data
class Student {
  constructor() {
    let name;
    let marks;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }

  getMarks() {
    return this.marks;
  }
  setMarks(marks) {
    this.marks = marks;
  }

}
let stud = new Student();
stud.setName("Dhanshu");
stud.setMarks(80);
document.writeln(stud.getName() + " " + stud.getMarks());  



//abstraction  hide the implementaions details and show functionality
// class Shape {
//   constructor(color) {
//     if (new.target === Shape) {
//       throw new Error('Shape is an abstract class and cannot be instantiated directly.');
//     }
//     this.color = color;
//   }

//   // Abstract method to calculate area
//   calculateArea() {
//     throw new Error('Subclasses must implement calculateArea() method.');
//   }

//   // Concrete method to describe the shape
//   describe() {
//     console.log(`This is a ${this.color} shape.`);
//   }
// }

// // Concrete subclass: Circle
// class Circle extends Shape {
//   constructor(color, radius) {
//     super(color);
//     this.radius = radius;
//   }

//   calculateArea() {
//     return Math.PI * this.radius ** 2;
//   }
// }

// // Concrete subclass: Rectangle
// class Rectangle extends Shape {
//   constructor(color, width, height) {
//     super(color);
//     this.width = width;
//     this.height = height;
//   }

//   calculateArea() {
//     return this.width * this.height;
//   }
// }

// // Usage
// const redCircle = new Circle('red', 5);
// const blueRectangle = new Rectangle('blue', 4, 6);

// redCircle.describe(); 
// console.log(`Circle area: ${redCircle.calculateArea()}`); 

// blueRectangle.describe(); 
// console.log(`Rectangle area: ${blueRectangle.calculateArea()}`); 


class Shape {
  constructor() {
    this.name = "Shape";
  }

  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.name = "Circle";
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.name = "Rectangle";
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

const myCircle = new Circle(5);
const myRectangle = new Rectangle(4, 6);

console.log(myCircle.name + " Area: " + myCircle.area()); 
console.log(myRectangle.name + " Area: " + myRectangle.area()); 
