const saveData = () => {
    let data = document.getElementById('data').value;
    localStorage.setItem('myData', data);
    console.log('Data saved to local storage.');
}

// Function to load data from local storage
const loadData = () => {
    let data = localStorage.getItem('myData');
    if (data) {
        document.getElementById('data').value = data;
        console.log('Data loaded from local storage.');
    } else {
        console.log('No data found in local storage.');
    }
}

// Function to clear data from local storage
const clearData = () => {
    localStorage.removeItem('myData');
    document.getElementById('data').value = '';
    console.log('Data cleared from local storage.');
}


// localStorage.setItem("city", "Noida");  //add city
// const res = localStorage.getItem("city"); // get city  
// localStorage.removeItem("city");  //remove from local storage
// localStorage.clear(); //clear storage


sessionStorage.setItem("name","Dhanshu");  //save data into sesson storage
let name = sessionStorage.getItem("name" );  //read data from session storage
console.log("name",name);  
sessionStorage.removeItem("name");  //remove data
