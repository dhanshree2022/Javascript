let arr = [
    [0, 'dhanshu', 25],
    [1, 'soni', 26],
    [2, 'dolly', 24],
    [3, 'neha', 25]
];
console.log(arr);
let print = '<table border="1"> <th>ID</th><th>NAME</th><th>AGE</th>';
for (let i = 0; i < arr.length; i++) {
    print = print + '<tr>';

    for (let j = 0; j < arr[i].length; j++) {

        print = print + "<td>";
        print = print + arr[i][j];
        print = print + "</td>";
    }
    print = print + '</tr>';
}
print = print + '</table>';

document.getElementById("table").innerHTML = print;


