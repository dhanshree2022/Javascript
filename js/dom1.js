// let divElem = document.getElementById("disp");
// let h1Elem = document.createElement("h1");
// let h1Text = document.createTextNode("Helloooo");

// h1Elem.appendChild(h1Text);
// divElem.appendChild(h1Elem)

// let aElem = document.createElement("a");
// aElem.setAttribute("href", "#");
// aElem.setAttribute("onclick", "handleClick()")
// let aText = document.createTextNode("Home");
// aElem.appendChild(aText);
// divElem.appendChild(aElem);

// const handleClick = () => {
//   console.log("click me!!!")
// }
const handleRemove = (id) => {
    console.log("vgvnv");
    let removeRef = document.getElementById("div-"+id);
    removeRef.remove();
    console.log(removeRef,id);
}
const handleSubmit = () => {
    event.preventDefault();
    let parent = document.getElementById("disp");
    let name = document.getElementById("name").value;
    // console.log(name);
    let id = Math.floor(Math.random()*1000);

    let divElem = document.createElement("div" + id );
    let divText = document.createTextNode(name);

    let btnElem = document.createElement("button");
    btnElem.setAttribute("onclick", "handleRemove()")
    let btnText = document.createTextNode("X");

    divElem.appendChild(divText);
    parent.appendChild(divElem);

    btnElem.appendChild(btnText);
    parent.appendChild(btnElem);
}