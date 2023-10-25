let update = null;
const submitForm = () => {
    // event.preventDefault();
    let id = Math.floor(Math.random() * 1000);
    let date = document.getElementById("date").value;
    let table = document.getElementById("table").value;
    let food = document.getElementById("food").value;
    let person = document.getElementById("person").value;
    let isValid = true;

    let dateErr = true;
    let tableErr = true;
    let foodErr = true;
    let personErr = true;
    console.log(date, table, food, person);
    if (date === "") {
        dateErr.innerHTML = "";

    } else {
        document.getElementById("dateErr").innerHTML = "Date is required";
        dateErr =  false;
    }

    if (table === "0") {
        tableErr.innerHTML = "";
    } else {
        document.getElementById("tableErr").innerHTML = "Table selection is required";
        tableErr = false;
    }
    if (food === "0") {
        tableErr.innerHTML = "";
    } else {
        document.getElementById("foodErr").innerHTML = "Food selection is required";
        foodErr = false;    }

    if (person === "") {
        tableErr.innerHTML = "";

    } else {
        
        document.getElementById("personErr").innerHTML = "No. of persons is required";
        personErr = false;
    }

    let localData = JSON.parse(localStorage.getItem("hotelBill"));

    if (update !== null) {
        let updatedObj = {
            id: update,
            date,
            table,
            food,
            person,
        };

        localData[update] = updatedObj;
        localStorage.setItem("hotelBill", JSON.stringify(localData));
        update = null;
        // console.log("update",hotelBill);

    } else {

        let hotelBill = {
            id,
            date,
            table,
            food,
            person,
        }
        console.log("Add", hotelBill);

        if (localData) {
            localData.push(hotelBill);
            localStorage.setItem("hotelBill", JSON.stringify(localData));

        } else {
            localStorage.setItem("hotelBill", JSON.stringify([hotelBill]));
        }

    }
    // localStorage.setItem("hotelBill", JSON.stringify(localData));
    // // update = null; 
    window.location.reload();
    // display();


    return isValid;
}

const display = () => {
    let tableRef = document.getElementById("disp");
    let localData = JSON.parse(localStorage.getItem("hotelBill"));
    let grandTotal = 0;

    localData.map((v) => {
        let tr = document.createElement("tr");

        let tdDate = document.createElement("td");
        let tdDateTxt = document.createTextNode(v.date);
        tdDate.appendChild(tdDateTxt);
        tr.appendChild(tdDate);
        tableRef.appendChild(tr);

        let tdTable = document.createElement("td");
        let tdTableTxt = document.createTextNode(v.table);
        tdTable.appendChild(tdTableTxt);
        tr.appendChild(tdTable);
        tableRef.appendChild(tr);

        let tdFood = document.createElement("td");
        let tdFoodTxt = document.createTextNode(v.food);
        tdFood.appendChild(tdFoodTxt);
        tr.appendChild(tdFood);
        tableRef.appendChild(tr);

        let tdPerson = document.createElement("td");
        let tdPersonTxt = document.createTextNode(v.person);
        tdPerson.appendChild(tdPersonTxt);
        tr.appendChild(tdPerson);
        tableRef.appendChild(tr);

        let tdTotal = document.createElement("td");
        let tdTotaTxt = document.createTextNode(v.person * v.food);
        tdTotal.appendChild(tdTotaTxt);
        tr.appendChild(tdTotal);
        tableRef.appendChild(tr);

        // let tdAction = document.createElement("td");
        let btnDelete = document.createElement("button");
        btnDelete.setAttribute("onclick", "handleRemove(" + v.id + ")")
        let btnDeleteText = document.createTextNode("X");

        btnDelete.appendChild(btnDeleteText);
        tr.appendChild(btnDelete);
        tableRef.appendChild(tr);

        let btnEdit = document.createElement("button");
        btnEdit.setAttribute("onclick", "handleEdit(" + v.id + ")")
        let btnEditText = document.createTextNode("E");

        btnEdit.appendChild(btnEditText);
        tr.appendChild(btnEdit);
        tableRef.appendChild(tr);
        
    });

    // let localData = JSON.parse(localStorage.getItem("hotelBill"));
    let answer = localData.reduce((acc, v) => acc + v.person * v.food , 0);

    console.log("totalAmount", answer);

    let trTotalAmountRow = document.createElement("tr");

    let tdTotalAmount = document.createElement("td");
    tdTotalAmount.setAttribute("colspan", "4");
    let tdTotalAmountTxt = document.createTextNode("Final Total");

    tdTotalAmount.appendChild(tdTotalAmountTxt);
    trTotalAmountRow.appendChild(tdTotalAmount);
    tableRef.appendChild(trTotalAmountRow);

    let finalTotalValueCell = document.createElement("td");
    let finalTotalValueCellTxt = document.createTextNode(answer);
    finalTotalValueCell.appendChild(finalTotalValueCellTxt);
    trTotalAmountRow.appendChild(finalTotalValueCell);
    tableRef.appendChild(trTotalAmountRow);
    
    
}

const handleRemove = (id) => {
    let localData = JSON.parse(localStorage.getItem("hotelBill"));

    let fData = localData.filter((v) => v.id != id);
    localStorage.setItem("hotelBill", JSON.stringify(fData));

    window.location.reload();


}

const handleEdit = (id) => {
    console.log(id);
    let localData = JSON.parse(localStorage.getItem("hotelBill"));
    console.log(localData);

    let index = localData.findIndex((v) => v.id == id);

    document.getElementById("date").value = localData[index].date;
    document.getElementById("table").value = localData[index].table;
    document.getElementById("food").value = localData[index].food;
    document.getElementById("person").value = localData[index].person;

    update = index;

}



display();

/// objent orintd prog concpt :    class , object, inheritence