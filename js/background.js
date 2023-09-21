function handlebackground(){
    // console.log("heello")

    let countryName = document.getElementById("country").value;
    console.log(countryName);


    if(countryName === 'in'){
        document.getElementById("body").style.backgroundColor = "red";
        // console.log("India");
    } else if(countryName === 'uk'){
        document.getElementById("body").style.backgroundColor = "pink";
        // console.log("UK");

    } else if(countryName === 'us'){
        document.getElementById("body").style.backgroundColor = "yellow";
        // console.log("Us");

    } else {
        document.getElementById("body").style.backgroundColor = "white";
        // console.log("00");

    }
}