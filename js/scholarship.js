function handleSubmit() {
    //  console.log(cast);
  
    let cast = document.getElementById("cast").value;
    let fees = parseFloat(document.getElementById("fees").value);
    let cgpa = parseFloat(document.getElementById("cgpa").value);
  
    console.log(cast, cgpa);
  
    //let castV = document.scholarship.cast.value;
  
    let grade;
  
    if (cgpa >= 9 && cgpa <= 10) {
      grade = "A";
    } else if (cgpa >= 8.5) {
      grade = "B";
    } else if (cgpa >= 8) {
      grade = "C";
    } else if (cgpa >= 7.5) {
      grade = "D";
    } else if (cgpa <= 7.4) {
      grade = "E";
    }
  
  
    console.log(grade);
    let scholar;
    if (grade == 'A' || grade == 'B') {
      if (cast == 'o') {
        scholar = fees * 0;
      } else if (cast == 'ob') {
        scholar = fees * 0.25;
      } else if (cast == 'sc') {
        scholar = fees * 0.50;
      } else if (cast == 'st') {
        scholar = fees * 1;
      }
    } else {
      scholar = 0;
    }
    console.log("scholarship", scholar);
    // document.getElementById("scholarship").innerHTML="Scholarship is:"+scholar;
    // cast validate
    if (cast === '0') {
      document.getElementById("castErr").innerHTML = "Please Enter your valid country name";
    } else {
      document.getElementById("castErr").innerHTML = " ";
  
      //console.log("false");
      //countryE =false;
    }
  
  
    // fees validate
  
    if (fees) {
      document.getElementById("feesErr").innerHTML = " ";
  
      // console.log("false");
    } else {
      document.getElementById("feesErr").innerHTML = "Please Enter Fees";
    }
  
  
    // cgpa validation
  
    if (cgpa) {
      document.getElementById("cgpaErr").innerHTML = " ";
  
      // console.log("false");
    } else {
      document.getElementById("cgpaErr").innerHTML = "Please Enter Cgpa";
    }
     
  
    document.getElementById("result").innerHTML = scholar;
    return false;
  
  }