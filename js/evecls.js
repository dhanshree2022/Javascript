function handleClick(){
    console.log("handleclick");
}

function handleMouseOver(){
    console.log("Mosuseover")
}

function handleMouseOut(){
    console.log("handleMouseOut")
}

function handleMouseUp(){
    console.log("mouseup")
}

function handleMouseDown(){
    console.log("handleMouseDown")
}

function handleKeyDown(){
    let name = document.getElementById("name").value;
    console.log(name);
}

function handleKeyUp(){
    let name = document.getElementById("name").value;
    console.log(name);
}

function handleFocus(){
    document.getElementById("name").style.backgroundColor="skyblue";
}

function handleBlur(){
    document.getElementById("name").style.backgroundColor="white";

}

window.onload = function(){
    alert("page loaded......");
}

window.onunload = function(){
    alert("clean...");
}

window.onresize = function(){
    console.log("page resize.....")
}
