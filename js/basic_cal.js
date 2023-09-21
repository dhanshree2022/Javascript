function insert(val){
    // console.log(val);

    document.form1.textview.value = document.form1.textview.value + val;
}

function equal(){
    
    // console.log("dd");
    let exp = document.form1.textview.value ;
    let ans= eval(exp);
    document.form1.textview.value = ans;

    console.log(exp,ans)
}

function clearData(){
    document.form1.textview.value = '';
}

function backspace(){
    let exp = document.form1.textview.value;
    document.form1.textview.value = exp.substring(0 ,exp.length - 1);
}