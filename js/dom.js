// // A property is a value that you can get or set (changing the content of an HTML element).
// // A method is an action you can do (add or deleting an HTML element).

// //display date
// document.getElementById("demo1").innerHTML = "Date : " + Date();
// //using id add text
// document.getElementById("demo").innerHTML = "Hello World!";
// //form mthod
// function validateForm() {
//   let x = document.forms["myForm"]["fname"].value;
//   if (x == "") {
//     alert("Name must be required");
//     return false;
//   }
// }
// //by id css apply
// document.getElementById("p2").style.color = "red";

// //onchange event
// function upperCase() {
//   let x = document.getElementById("fname");
//   x.value = x.value.toUpperCase();
// }

// //onmouse out & over
// function mOver(obj) {
//   obj.innerHTML = "Thank You"
// }

// function mOut(obj) {
//   obj.innerHTML = "Mouse Over Me"
// }


let divElem = document.getElementById("disp");
let h1Elem = document.createElement("h1");
let h1Text = document.createTextNode("Helloooo");

h1Elem.appendChild(h1Text);
divElem.appendChild(h1Elem)

let aElem = document.createElement("a");
aElem.setAttribute("href", "Home");
aElem.setAttribute("onclick", "handleClick()")
let aText = document.createTextNode("Home");
aElem.appendChild(aText);
divElem.appendChild(aElem);

const handleClick = () => {
  console.log("click me!!!")
}
//7 marks
//dom  localstorage session storage