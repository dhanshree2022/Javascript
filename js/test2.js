// const name = document.getElementById("name").value;
// console.log(name);

// const dob = document.getElementById("dob").value;
// console.log(dob);

// const occupation = document.getElementById("occupation").value;
// console.log(occupation);

// const income = document.getElementById("income").value;
// console.log(income);

let currentAge;

const handleIncome =()=>{
    console.log("heyyyyyy");

    let name = document.getElementById("name").value;
    console.log(name);
    

    let d = new Date(age);
    let year = (d.getFullYear());
    currentAge = 2023 - year;
    console.log(currentAge);

    let mobile = document.getElementById("mobile").value;
    console.log(mobile);

    let income = document.getElementById("income").value;
    console.log(income)

    let insurance = document.getElementById("insurance").value;
    console.log(insurance);

    

    if(income > insurance){
        document.getElementById("insuranceErr").innerHTML="";
    } else {
        document.getElementById("insuranceErr").innerHTML="Please Enter Valid amount";

    }
    
}




const handleSubmit = () =>{
    let premium = 0;

    // if (age < 30) {
    //     premium += 200;
    // } else if (age >= 30 && age < 60) {
    //     premium += 150;
    // } else {
    //     premium += 300;
    // }

    // if (smoker) {
    //     premium += 250;
    // }

    // premium += coverage * 0.1;



    console.log("hello");
    event.preventDefault();
    // let dob = document.getElementById("dob").value;
    // let bdate = new Date(bdate);
   

    let print = " ";
    print += '<table border="1"><tr><th>Name</th><th>Age</th><th>Mobile number</th><th>Insuarance amount</th><th>Premium</th></tr>'

        print =+ '<tr>';

        print =+ '<td>';
        print =+ name;
        print =+ '</td>';

        print = + '<td>';
        print = + currentAge;
        print = + '</td>';

        print = + '<td>';
        print =  + mobile;
        print =  + '</td>';

        print = + '<td>';
        print = + insurance;
        print = + '</td>';


        print = + '<td>';
        print = + premium;
        print = + '</td>';

        
        print = + '</tr>';

        print = + '</table>';
        document.getElementById("displayData").innerHTML=print;
    

    }


