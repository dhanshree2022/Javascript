const handleSubmit = () => {
    let localData = JSON.parse(localStorage.getItem("name"));
    console.log(localData);

    let name = document.getElementById("name").value;
    if (localData) {
        localData.push(name);
        localStorage.setItem("name", JSON.stringify(localData));
    } else {
        localStorage.setItem("name", JSON.stringify([name]));
    }

    display();
}

const display = () => {
    let localData = JSON.parse(localStorage.getItem("name"));
    console.log(localData);

    let divRef = document.getElementById("disp");
    divRef.innerHTML = '';
    localData.map((l) => {

        let tableElem = document.createElement("table");
        let liText = document.createTextNode(l);

        tableElem.appendChild(liText);
        divRef.appendChild(tableElem);

    })

}

display();
