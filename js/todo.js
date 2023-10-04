let arr = [];
let update_Index = null;
const handleSubmit = () => {
    event.preventDefault();
    console.log("dhanshuuuu");

    let data = document.getElementById("name").value;

    if (update_Index != null || update_Index === 0) {
        console.log('Update Data sucessfully');
        arr[update_Index] = data;
        update_Index = null;
    } else {
        console.log('Add Data Sucessfully');
        arr.push(data);
    }
    document.getElementById("name").innerHTML = '';
 
    DisplayData();
}
const handleDelete = (index) => {
    arr.splice(index, 1);

    DisplayData();
}
const handleEdit = (index) => {
    console.log(index);
   
    update_Index = index;
    document.getElementById("name").value = arr[index];

    // DisplayData();
}
const DisplayData = () => {
    let print = "<ul>";
    arr.map((value, index) => {
        print =
            print +
            `<li>${value}<button onclick = handleEdit(${index})> Edit </button><button onclick = handleDelete(${index})> remove </button></li>`;
    })
    print = print + "</ul>";

    document.getElementById("namebtn").innerHTML = print;
}