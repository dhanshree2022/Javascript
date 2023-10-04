function validateForm(){
    let name = document.contactForm.name.value;
    console.log(name);
    if(name === ''){
        document.getElementById("nameErr").innerHTML="please enter name";
    } else {
        let nameregex = /^[a-zA-Z ]{2,30}$/;
        if(nameregex.test(name)){
            document.getElementById("nameErr").innerHTML="";
            nameE = false;
        } else {
            document.getElementById("nameErr").innerHTML="please enter valid name";
        }
    }

    let email = document.contactForm.email.value;
    console.log(email);
    if(email === ''){
        document.getElementById("emailErr").innerHTML="please enter email";
    } else {
        let emailregex =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(emailregex.test(email)){
            document.getElementById("emailErr").innerHTML="";
            emailE = false;
        } else {
            document.getElementById("emailErr").innerHTML="please enter valid email";
        }
    }

    let mobile = document.contactForm.mobile.value;
    console.log(mobile);
    if(mobile === ''){
        document.getElementById("mobileErr").innerHTML="please enter mobile number";
    } else {
        let mobregex = /^([0|\+[0-9]{1,5})?([1-9][0-9]{9})$/; 
        if(mobregex.test(mobile)){
            document.getElementById("mobileErr").innerHTML="";
            mobileE = false;
        } else {
            document.getElementById("mobileErr").innerHTML="please enter valid mobile number";
        }
    }

    let country = document.contactForm.country.value;
    console.log(country);
    if (country === "0") {
        document.getElementById("countryErr").innerHTML="please select country";
    } else {
        document.getElementById("countryErr").innerHTML="";
        countryE = false;
    }
    
    let gender = document.contactForm.gender.value;
    console.log(gender);
    if (gender === "") {
        document.getElementById("genderErr").innerHTML="Please select gender";
    } else {
        document.getElementById("genderErr").innerHTML="";
        genderE = false;
    }

    let hobby = document.contactForm.hobbies;
    let flag = false;
    for(let i=0; i < hobby.length; i++){
        console.log(hobby[i].value,hobby[i].checked);
        if(hobby[i].checked){
            flag = true;
            break;
        }
    }
    if(flag){
        document.getElementById("hobbyErr").innerHTML="";
        hobbyE = false;
    } else {
        document.getElementById("hobbyErr").innerHTML="Please Select atleast one hobby...";
    }

    let nameE = true;
    let emailE = true;
    let mobileE = true;
    let countryE = true;
    let genderE = true;
    let hobbyE = true;

    if(nameE || emailE || mobileE || countryE || genderE || hobbyE){
        return false;
    } else {
        return true;
    }
    
}