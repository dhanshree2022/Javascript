// A property is a value that you can get or set (changing the content of an HTML element).
// A method is an action you can do (add or deleting an HTML element).

//display date
document.getElementById("demo1").innerHTML = "Date : " + Date();
//using id add text
document.getElementById("demo").innerHTML = "Hello World!";
//form mthod
function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be required");
    return false;
  }
}
//by id css apply
document.getElementById("p2").style.color = "red";

//onchange event
function upperCase() {
  const x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}

//onmouse out & over
function mOver(obj) {
  obj.innerHTML = "Thank You"
}

function mOut(obj) {
  obj.innerHTML = "Mouse Over Me"
}
