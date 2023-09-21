function greeting() {
    console.log("Hello Dhanshu..");
}
greeting();

function calcuateAge(birthYear) {
    let age;
    age = 2023 - birthYear;
}
calcuateAge(1997);
// console.log(res);

const greeting1 = () =>{
    console.log("Good Morning......");
}
greeting1();

const age = (year) => {
    let Age ;
    Age = 2023 - year;
    console.log(Age)
}
age(1997);

const costing = (place) =>{

    if(place === "Udaipur"){
        return 35000;
    } else if (place === "Manali"){
        return 85000;
    }

}
const packages = (place) => {
     
    let cost1 = costing(place);
    console.log("cost is",cost1);
    let msg;
    msg = place + 'costing is :' + cost1 + '.';
    return msg;

}
// packages("Udaipur");
// packages("Manali");
let result = packages("Udaipur");
console.log("result", result);

let result1 = packages("Manali");
console.log("result1", result1);