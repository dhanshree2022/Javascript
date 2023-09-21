incomeE = true;
function handleSubmit() {
 // event.preventDefault();

  //console.log("ok");

   let income = parseInt(document.getElementById("income").value);

  // console.log(income);

  //let income = document.incometaxform.income.value;
 
  
  if (!income) {
    document.getElementById("incomeErr").innerHTML = "Please enter your income";
  } else if (income <= 0 || income < 300000 ) {
    document.getElementById("incomeErr").innerHTML =
      "Please enter your valid income";
  } else {
    document.getElementById("incomeErr").innerHTML = "";
    //return = false;

    let s1 = 0,
      s2 = 0,
      s3 = 0,
      s4 = 0,
      s5 = 0,
      s6 = 0;

    if (income <= 300000) {

    } else if (income <= 600000) {
      s1 = 0;
      s2 = (income - 300000) * 0.05;
    } else if (income <= 900000) {
      s1 = 0;
      s2 = 300000 * 0.05;
      s3 = (income - 600000) * 0.1;
    } else if (income <= 1200000) {
      s1 = 0;
      s2 = 300000 * 0.05;
      s3 = 300000 * 0.1;
      s4 = (income - 900000) * 0.15;
    } else if (income <= 1500000) {
      s1 = 0;
      s2 = 300000 * 0.05;
      s3 = 300000 * 0.1;
      s4 = 300000 * 0.15;
      s5 = (income - 1200000) * 0.2;
    } else if (income > 1500000) {
      s1 = 0;
      s2 = 300000 * 0.05;
      s3 = 300000 * 0.1;
      s4 = 300000 * 0.15;
      s5 = 300000 * 0.2;
      s6 = (income - 1500000) * 0.3;
    }
    console.log(s1, s2, s3, s4, s5, s6);

    total = s1 + s2 + s3 + s4 + s5 + s6;

    document.getElementById("slab1").innerHTML = s1;
    document.getElementById("slab2").innerHTML = s2;
    document.getElementById("slab3").innerHTML = s3;
    document.getElementById("slab4").innerHTML = s4;
    document.getElementById("slab5").innerHTML = s5;
    document.getElementById("slab6").innerHTML = s6;

    document.getElementById("total").innerHTML = total;

    
  }
  return false;
}