let finalAge;
let amount;
let ans;


function handleSubmit() {
    // console.log("okkkkk");

    let age = document.getElementById("date").value;
    let occ = document.formvalue.work.value;
    let inc = document.getElementById("income").value;
    let amoo = document.getElementById("amount").value;
    let smoke = document.formvalue.smokeing.value;

    let d = new Date(age);
    let year = (d.getFullYear());
    finalAge = 2023 - year;
    // console.log(finalAge);
    let bonus18 = 1000;
    let bonus26 = 1500;
    let bonus36 = 2000;
    let bonus45 = 2500;
    let bonus;

    if (occ === "Self_Employee") {
        if (finalAge >= 18 && finalAge <= 25) {
            bonus = (bonus18 * 0.10) + 1000;
        } else if (finalAge >= 26 && finalAge <= 35) {
            bonus = (bonus26 * 0.10) + 1500;
        } else if (finalAge >= 36 && finalAge <= 45) {
            bonus = (bonus36 * 0.10) + 2000;
        } else if (finalAge > 45) {
            bonus = (bonus45 * 0.10) + 2500;
        }
    } else {
        if (finalAge >= 18 && finalAge <= 25) {
            bonus = 1000;
        } else if (finalAge >= 26 && finalAge <= 35) {
            bonus = 1500;
        } else if (finalAge >= 36 && finalAge <= 45) {
            bonus = 2000;
        } else if (finalAge > 45) {
            bonus = 2500;
        }
    }

    // console.log(bonus);


    if (inc === "3lakh") {
        amount = 5000000;
    } else if (inc === "5lakh") {
        amount = 10000000;
    } else if (inc === "10lakh") {
        amount = 15000000;
    } else if (inc === "about") {
        amount = 20000000;
    }

    if (inc === "3lakh" && amoo >= 5000000) {
        // document.getElementById("error").innerHTML = "yes"
        document.getElementById("error").innerHTML = "please enter"
    } else if (inc === "5lakh" && amoo >= 10000000) {
        document.getElementById("error").innerHTML = "please enter"
    } else if (inc === "10lakh" && amoo >= 15000000) {
        document.getElementById("error").innerHTML = "please enter"
    } else if (inc === "about" && amoo >= 20000000) {
        document.getElementById("error").innerHTML = "please enter"
    } else {
        document.getElementById("error").innerHTML = ""
        // document.getElementById("error").innerHTML = "no"
    }


    let smokeBonus;

    if (smoke === "Yes") {
        if (finalAge >= 18 && finalAge <= 25) {
            smokeBonus = (bonus18 * 0.20);
        } else if (finalAge >= 26 && finalAge <= 35) {
            smokeBonus = (bonus26 * 0.20);
        } else if (finalAge >= 36 && finalAge <= 45) {
            smokeBonus = (bonus36 * 0.20);
        } else if (finalAge > 45) {
            smokeBonus = (bonus45 * 0.20);
        }
    } else {
        smokeBonus = 0;
    }


    ans = smokeBonus + bonus;
    // console.log(ans);

    return false
}

function handleClick() {
    // event.preventDefault();
    let namefull = document.getElementById("name").value;
    let number = document.getElementById("mobile").value;

    let print = "";

    print += '<table border="1"><tr><th>Name</th><th>Age</th><th>Mobile number</th><th>Insuarance amount</th><th>Premium</th></tr>'

    print += '<tr>'

    print += '<td>'
    print += namefull;
    print += '</td>'

    print += '<td>'
    print += finalAge;
    print += '</td>'

    print += '<td>'
    print += number;
    print += '</td>'

    print += '<td>'
    print += amount;
    print += '</td>'

    print += '<td>'
    print += ans;
    print += '</td>'

    print += '</tr>'

    print += '</table>'


    document.getElementById("aaa").innerHTML = print;
    document.getElementById("finalAns").style.display = "block";

    // return false
}