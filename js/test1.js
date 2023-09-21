function handleSubmit() {
    // console.log("hello")

    let num = document.getElementById("num").value;
    console.log(num);

    let convert1 = document.getElementById("convert1").value;
    console.log(convert1);

    let convert2 = document.getElementById("convert2").value;
    console.log(convert2);

    // let m;
    // let km;
    // let ResultCm = m * 100;
    // console.log(ResultCm);
    // let ResultKm = km * 100000;

    // if (num) {

    //     document.getElementById("numErr").innerHTML = "";
    //     numE=false;

    // } else {


    //     document.getElementById("numErr").innerHTML = "please enter value";


    // }

    // if (convert1 === "0") {


    //     document.getElementById("convert1Err").innerHTML = "";
    //     convert1E= false;

    // } else {

    //     document.getElementById("convert1Err").innerHTML = "please select first coversion";

    // }

    // if (convert2 === "0") {
    //     document.getElementById("convert2Err").innerHTML = "";
    //     convert2=false;

    // } else {
    //     document.getElementById("convert2Err").innerHTML = "please select second coversion";

    // }


    // let Result = meter * 100;

    // console.log(Result);

    // if(numE || convert1E || convert2E){
    //     return true;
    // } else {
    //     return false;

        
    // }


    if (num === '') {
        document.getElementById("numErr").innerHTML = "Please Enter number";

    } else if (num <= 0) {
        document.getElementById("numErr").innerHTML = "Please Enter valid number";
    } else {
        document.getElementById("numErr").innerHTML = "";

        let Ans;

        if (convert1 === 'cm' && convert2 === 'km') {
            Ans = num / 100000;
            console.log(Ans)
        } else if (convert1 === 'cm' && convert2 === 'm') {
            Ans = num / 100;
        } else if (convert1 === 'cm' && convert2 === 'cm') {
            Ans = num;
        }


        if (convert1 === 'km' && convert2 === 'cm') {
            Ans = num * 100000;
        } else if (convert1 === 'km' && convert2 === 'm') {
            Ans = num * 100;
        } else if (convert1 === 'km' && convert2 === 'km') {
            Ans = num;
        }

        if (convert1 === 'm' && convert1 === 'cm') {
            Ans = num * 100;
        } else if (convert1 === 'm' && convert2 === 'km') {
            Ans = num / 1000;
        } else if (convert1 === 'm' && convert2 === 'm') {
            Ans = num;
        }

        document.getElementById("result").innerHTML = Ans;



        return false;

    }


}