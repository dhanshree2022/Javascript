//hoisting in javascript is behavoiur in which function or variable can be use befor declation

	// Hoisting
// 	let x = 20,
//   y = 10;

// let result = add(x, y); 
// console.log(result); 

// function add(a, b) {
//   return a + b;
// }



//Variable Declarations: declare a variable using var, let, const, the declaration hoisted to the top of its containing function or block scope.

console.log(x); 
console.log(y); 
console.log(a); 


var x = 5;
let y = 10;
const a = 8;


// Function Declarations: function declare at top we call fun before executr code
one();
function one() {
  let name = "dhanshhree";
  console.log("Hello, Dhanshuu!");
  console.log(name)
}


// Function Expressions:  variable declaration is hoisted, not the function itself.

two(); 
var two = function () {
  console.log("Hello, Good Morning!");
};





