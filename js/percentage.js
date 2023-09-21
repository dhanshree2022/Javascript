// function handleSubmit() {
//     let maths = document.getElementById("maths").value;
//     let physics = document.getElementById("physics").value;
//     let chemistry = document.getElementById("chemistry").value;
//     console.log(maths, physics, chemistry)

// }

function handleSubmit() {
    //console.log("ok");

    let maths = parseInt(document.getElementById("maths").value);
    let science = parseInt(document.getElementById("science").value);
    let english = parseInt(document.getElementById("english").value);
    //console.log("maths,science,english");

    if (!maths) {
        document.getElementById("mathsErr").innerHTML = "Please enter maths marks";
    } else {
        document.getElementById("mathsErr").innerHTML = "";
    }

    if (!science) {
        document.getElementById("scienceErr").innerHTML = "Please enter science marks";
           
    } else {
        document.getElementById("scienceErr").innerHTML = "";
    }

    if (!english) {
        document.getElementById("englishErr").innerHTML ="Please enter english marks";
            
    } else {
        document.getElementById("englishErr").innerHTML = "";
    }

    let percentage = (maths + science + english) / 3;
    let grade;

    if (percentage >= 91 && percentage <= 100) {
        grade = "Grade A";
    } else if (percentage >= 81 && percentage < 91) {
        grade = "Grade B";
    } else if (percentage >= 71 && percentage < 81) {
        grade = "Grade C";
    } else if (percentage >= 61 && percentage < 71) {
        grade = "Grade D";
    } else if (percentage >= 40 && percentage < 61) {
        grade = "Grade E";
    } else if (percentage >= 0 && percentage < 40) {
        grade = "Failed";
    } else {
        grade = "Invalid Percentage";
    }

    document.getElementById("result").innerHTML = percentage;
    document.getElementById("result").innerHTML = grade;


    return false;
}