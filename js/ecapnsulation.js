// Encapsulation
class Student {
    id;
    name;
    #fees;   // private data member
    constructor(i,n,f){
        this.id = i;
        this.name = n;
        this.#fees = f;
    }
    displayInfo(){
        console.log(this.id,this.name);
    }
    #displayFees(){    // private method
        console.log(this.#fees)
    }
    dispalyAll(){
        this.displayInfo();
        this.#displayFees();
    }
}

class Course extends Student {
    course_name;
    duration;
    #scholarship;

    constructor(i,n,f,c,d){
        super(i,n,f);
        this.course_name = c;
        this.duration = d;
    }

    getStudentInfo(){
        this.dispalyAll();
        console.log(this.course_name,this.duration);
    }

    // setter method
    set schloarship(s){
        this.#scholarship = s;
    }

    //getter method
    get schloarship (){
        console.log(this.#scholarship);
    }
}
let c1 = new Course(101,'Dhanshu',1000,'js','3 months')
c1.getStudentInfo();
c1.schloarship = 2000;
c1.schloarship;
// let s1 = new Student(101,'Dhanshu',1000);
// s1.displayInfo();
// // s1.#displayFees();  // eroor
// s1.dispalyAll()