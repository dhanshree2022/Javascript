const validateForm = () => {
    let date = document.getElementById("date").value;
    let table = document.getElementById("table").value;
    let food = document.getElementById("food").value;
    let person = document.getElementById("person").value;
    let isValid = true;

    console.log(date,table,food,person);
    if (date === "") {
        document.getElementById("dateErr").innerHTML="Date is required";
        isValid = false;
    } else {
        dateErr.innerHTML = "";
    }

    if (table === "0") {
        document.getElementById("tableErr").innerHTML="Table selection is required";
        isValid = false;
    }  else {
        tableErr.innerHTML = "";
    }
    if (food === "0") {
        document.getElementById("foodErr").innerHTML="Food selection is required";
        isValid = false;
    }  else {
        tableErr.innerHTML = "";
    }

    if (person === "") {
        document.getElementById("personErr").innerHTML="No. of persons is required";
        isValid = false;
    }  else {
        tableErr.innerHTML = "";
    }

    let obj ={
        date: date,
        table: table,
        food: food,
        person: person
    }
    console.log(obj);

    let total = parseInt(food) * parseInt(person);
    console.log(total);




    let localData = JSON.parse(localStorage.getItem("date"),("table"));
    console.log(localData);

    if (localData) {
        localData.push(date);
        localStorage.setItem("date", JSON.stringify(localData),"table",JSON.stringify(localData));
    } else {
        localStorage.setItem("date", JSON.stringify([date]),"date",JSON.stringify([table]));
    }

    display();

    // let localData = JSON.parse(localStorage.getItem("date","table","food","person"));
    // console.log(localData);

    let d = localStorage.getItem('date');
    let t = localStorage.getItem('table');
    let f = localStorage.getItem('food');
    let n = localStorage.getItem('person');

    if (localData) {
        d.push(date);
        t.push(table);
        f.push(food);
        n.push(person)
        localStorage.setItem("date", JSON.stringify(d));
        localStorage.setItem("table", JSON.stringify(t));
        localStorage.setItem("food", JSON.stringify(f));
        localStorage.setItem("person", JSON.stringify(n));


    } else {
        localStorage.setItem("date", JSON.stringify([date]));
        localStorage.setItem("table", JSON.stringify([table]));
        localStorage.setItem("food", JSON.stringify([food]));
        localStorage.setItem("person", JSON.stringify([person]));

    }



    // display();
return isValid;
}



   
const display = () => {
    // let localData = JSON.parse(localStorage.getItem("date"),("table"));
    // console.log(localData);

    let d = localStorage.getItem('date');
    let t = localStorage.getItem('table');
    let f = localStorage.getItem('food');
    let n = localStorage.getItem('person');

    var table = document.createElement('table');

    // Create a table header row
    var headerRow = table.insertRow(0);

    // Create header cells
    var headerCell1 = headerRow.insertCell(0);
    var headerCell2 = headerRow.insertCell(1);
    var headerCell3 = headerRow.insertCell(2);
    var headerCell4 = headerRow.insertCell(3);
    var headerCell5 = headerRow.insertCell(4);

    // Set header cell text
    headerCell1.innerHTML = 'Date';
    headerCell2.innerHTML = 'Table';
    headerCell3.innerHTML = 'Food';
    headerCell4.innerHTML = 'No.Of Person';
    headerCell5.innerHTML = 'TotalBill';
    // cell1.innerHTML = date;
    // cell2.innerHTML = table;
    // cell3.innerHTML = food;
    // cell4.innerHTML = person;

    // document.getElementById("date").value = "";
    // document.getElementById("table").value = "0";
    // document.getElementById("food").value = "0";
    // document.getElementById("person").value = "";


    // Create data rows and cells
    var data = [
        ['John', 25, 'New York'],
        ['Alice', 30, 'Los Angeles'],
        ['Bob', 22, 'Chicago']
    ];

    // for (var i = 0; i < data.length; i++) {
    //     var row = table.insertRow(i + 1); // +1 to skip the header row
    //     for (var j = 0; j < data[i].length; j++) {
    //         var cell = row.insertCell(j);
    //         cell.innerHTML = data[i][j];
    //     }
    // }

    // Add the table to the container
    var tableContainer = document.getElementById('disp');
    tableContainer.innerHTML = ''; // Clear the container
    tableContainer.appendChild(table);
}

    


display();




// // Function to handle form submission
// function handleSubmit() {

//   // Calculate total bill
//   const total = parseInt(food) * parseInt(person);

//   // Create a table row to display the result
//   const newRow = document.createElement('tr');
//   newRow.innerHTML = `
//     <td>${date}</td>
//     <td>Table ${table}</td>
//     <td>${person} persons</td>
//     <td>Total: ${total} INR</td>
//   `;

//   // Append the new row to the table
//   dispTable.appendChild(newRow);

//   // Reset the form
//   dateInput.value = '';
//   tableSelect.value = '0';
//   foodSelect.value = '0';
//   personInput.value = '';
// }


