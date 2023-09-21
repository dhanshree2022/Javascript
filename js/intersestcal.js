function calculateInterest() {
    let principal = Number(document.getElementById("principal").value);
    let rate = Number(document.getElementById("rate").value);
    let time = Number(document.getElementById("time").value);
    let duration = document.getElementById("duration").value;

    console.log(duration);
    
    let valid = true;

    if (isNaN(principal) || principal <= 0) {
        document.getElementById("principalError").innerHTML = "Please enter a valid principal amount.";
    } else {
        document.getElementById("principalError").innerHTML = "";
    }

    if (isNaN(rate) || rate <= 0) {
        document.getElementById("rateError").innerHTML = "Please enter a valid interest rate.";
        valid = false;
    } else {
        document.getElementById("rateError").innerHTML = "";
    }

    if (isNaN(time) || time <= 0) {
        document.getElementById("timeError").innerHTML = "Please enter a valid time period.";
        valid = false;
    } else {
        document.getElementById("timeError").innerHTML = "";
    }    
    
    if (duration === "0") {
        document.getElementById("durationErr").innerHTML="Please Select Duration";
        valid = false;

    } else {
        document.getElementById("durationErr").innerHTML="";
    }

    if (valid) {
        let simpleInterest = duration == "y" ? (principal * rate * time) / 100 : (principal * rate * time) / 1200;
        console.log(simpleInterest);
        document.getElementById("result").innerHTML = "Simple Interest: " + simpleInterest.toFixed(2);
    } else {
        document.getElementById("result").innerHTML = "";
    }


    
}

