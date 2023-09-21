// function calculateBMI() {
//     const weight = parseFloat(document.getElementById("weight").value);
//     const height = parseFloat(document.getElementById("height").value) / 100; 
//     let valid = true;

//     if (isNaN(weight) || weight <= 0 ) {
//         document.getElementById("weightE").innerHTML = "Please enter valid  weight ";
//         valid = false;
//     }
//     else{
//         document.getElementById("weightE").innerHTML = "";
//     }

//     if ( isNaN(height) || height <= 0) {
//         document.getElementById("heightE").innerHTML = "Please enter valid height.";
//         valid = false;
//     } else{
//         document.getElementById("heightE").innerHTML = "";
//     }

//     const bmi = weight / (height * height);

//     let category ;
//     if (bmi < 18.5) {
//         category = "Underweight";
//     } else if (bmi < 24.9) {
//         category = "Normal Weight";
//     } else if (bmi < 29.9) {
//         category = "Overweight";
//     } else {
//         category = "Obese";
//     }

//     const resultText = `Your BMI is ${bmi.toFixed(2)} (${category})`;
//     document.getElementById("result").innerHTML = resultText;
// }

function handlebmi() {
    let weight = document.contactForm.weight.value;
    let height = document.contactForm.height.value;
  
    // let weight = parseFloat(document.getElementById("weight").value);
    // let height = parseFloat(document.getElementById("height").value);
  
    let weightE = true;
    let heightE = true;
  
    if (weight === "") {
      document.getElementById("weightErr").innerHTML = "Please enter weight";
    } else {
      document.getElementById("weightErr").innerHTML = "";
      weightE = false;
    }
  
    if (height === "") {
      document.getElementById("heightErr").innerHTML = "Please enter height";
    } else { 
      document.getElementById("heightErr").innerHTML = "";
      heightE = false;
    }
  
    if (weightE || heightE) {
      return true;
    } else {
      let cm = height / 100;
      let bmical = weight / (cm * cm);
      let answer = bmical;
  
      if (answer < 18.5) {
        document.getElementById("bmi-value").innerHTML = "Underweight";
      } else if (answer < 24.9) {
        document.getElementById("bmi-value").innerHTML = "Normal Weight";
      } else if (answer < 29.9) {
        document.getElementById("bmi-value").innerHTML = "Overweight";
      } else {
        document.getElementById("bmi-value").innerHTML = "Obese";
      }
      document.getElementById("bmi-category").innerHTML = answer.toFixed(2);
  
      return false;
    }
  }