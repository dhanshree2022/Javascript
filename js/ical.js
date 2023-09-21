function calculateInterest() {
    // Get the input values
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const time = parseFloat(document.getElementById("time").value);

    // Validate input
    let valid = true;

    if (isNaN(principal) || principal <= 0) {
        document.getElementById("principalError").textContent = "Please enter a valid principal amount.";
        valid = false;
    } else {
        document.getElementById("principalError").textContent = "";
    }

    if (isNaN(rate) || rate <= 0) {
        document.getElementById("rateError").textContent = "Please enter a valid interest rate.";
        valid = false;
    } else {
        document.getElementById("rateError").textContent = "";
    }

    if (isNaN(time) || time <= 0) {
        document.getElementById("timeError").textContent = "Please enter a valid time period.";
        valid = false;
    } else {
        document.getElementById("timeError").textContent = "";
    }

    if (valid) {
        // Calculate simple interest
        const interest = (principal * rate * time) / 100;
        document.getElementById("result").textContent = "Simple Interest: " + interest.toFixed(2);
    } else {
        document.getElementById("result").textContent = "";
    }
}