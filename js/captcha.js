let n1 = Math.floor(Math.random()*10);
let n2 = Math.floor(Math.random()*10);

document.getElementById("num1").innerHTML = n1;
document.getElementById("num2").innerHTML = n2;

let correctAns = n1 + n2;
 console.log(n1,n2,correctAns);


function handleSubmit(){

    let ans = parseInt(document.getElementById,("ans").value);
    let result = document.getElementById("ans").value;

    if(!result){
        document.getElementById("ansE").innerHTML = "Please enter value";
    }
    else{
        if(correctAns===ans){
            alert("Correct");
        }else{
            alert("Incorrect. Correct answer is:" + correctAns);
        }
    }
    
    return false;
    
    // console.log("handleSubmit")

}
