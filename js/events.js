//onload
document.write("Successfully Loaded");  

//onchange
function upperCase() {
    // console.log("hello");
    const x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
    console.log("onchange event",x.value);
}
//onmouseover onmouse out
function mOver(obj) {
    obj.innerHTML = "Thank You Dhanshu"
  }
  
  function mOut(obj) {
    obj.innerHTML = "Mouse Over Me"
  }
  
  //mouseupdown
  function mDown(obj) {
    obj.style.backgroundColor = "#1ec5e5";
    obj.innerHTML = "hello";
  }
  
  function mUp(obj) {
    obj.style.backgroundColor="#D94A38";
    obj.innerHTML="Thank You";
  }
  

//focus event
function focusevent()  
{  
    document.getElementById("input1").style.background=" aqua";  
    console.log("FocusEvent")
}  

//keydown
function keydownevent()
{
    document.getElementById("input1");
    console.log("keydown")

    // alert("Pressed a key");
}

//onclick event
function clickevent()  
{  
    document.write("Hello Dhanshu");  
}  
//event handler
function changeText(id) {
    id.innerHTML = "Hey Dhanshree!";
  }
