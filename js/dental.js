const tc_s = 1, tc_c = 500;
const fl_s = 2, fl_c = 1500;
const rc_s = 4, rc_c = 2500;
const rctco_s = 6, rctco_c = 12000;
const br_s = 12, br_c = 35000;
let treat_name, tr_s = 0, tr_c =0;

const handleChangeTreatment = () => {
    // console.log("dhanshu");

    let treatment = document.getElementById("treatment").value;
    console.log(treatment);

    if(treatment === "tc"){
        treat_name = "Teeth Cleaning";
        tr_s = tc_s;
        tr_c = tc_c;
    } else if(treatment === "fl"){
        treat_name = "Filling";
        tr_s = fl_s;
        tr_c = fl_c;
    }else if(treatment === "rc"){
        treat_name = "Root Canal Tratment";
        tr_s = rc_s;
        tr_c = rc_c;
    } else if (treatment === "rct_co"){
        treat_name = "RCT + Cover";
        tr_s = rctco_s;
        tr_c = rctco_c;
    } else if (treatment === "br"){
        treat_name = "Braces";
        tr_s = br_s;
        tr_c = br_c;
    }

    // console.log(treat_name,tr_s,tr_c);

    document.getElementById("treat").innerHTML = treat_name;
    document.getElementById("seat").innerHTML = tr_s;
    document.getElementById("cost").innerHTML = tr_c;

    document.getElementById("apt").style.display = 'block';

}

const handleAppointment=() =>{
    // console.log("helllloooooo");
    event.preventDefault();

    let aptDate = document.getElementById("aptDate").value;
    // console.log(aptDate);

    let d = new Date(aptDate);
    // let print = '<table border="1"><tr><th>Treatment</th><th>Seating</th><th>Costing</th></tr> </table>';

    let print = ''
   print = '<table border="1"><tr><th>Treatment</th><th>Seating Required</th><th>Costing</th></tr>'

    for(let  i = 0; i < tr_s; i++){
        print = print + '<tr>';

        print = print + '<td rowspan >';
        print = print + treat_name;
        print = print + '</td>';

        print = print + '<td>';
        print = print + d.toLocaleDateString();
        print = print + '</td>';

        print = print + '<td>';
        print = print + tr_c/tr_s;
        print = print + '</td>';

        print = print + '</tr>';

        console.log(d.toLocaleDateString, tr_c/tr_s);
        d.setDate(d.getDate() + 7);

    }
    print = print + '</table>';
    document.getElementById("planDisplay").innerHTML=print;
    // console.log(print);


    // console.log(treat_name,tr_s,tr_c);

}

