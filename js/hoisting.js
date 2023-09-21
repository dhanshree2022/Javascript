    // console.log(x);//undefinded
    // var x;
    // x=10;

    // console.log(x);  // error
    // let x;
    // const x;

    // console.log(x)  //error
    // x=10;

    // x=10;
    // console.log(x);   //10

    // x=10;
    // let x;
    // console.log(x);  //error

    // x=10;
    // var x;
    // console.log(x);  // 10

    // console.log(x);  //undefined
    // x=10;
    // var x;


    // function demo(){
    //     var x;
    //     x=10;
    //     console.log(x);//10
    // }
    // demo();
    // console.log(x);//error


    // function demo(){
    //     if(true){
    //         var x;
    //         x=10;
    //     }
    //     console.log(x); //10
    // }
    // demo();


    // function demo(){
    //     if(true){
    //         let x;
    //         x=10;
    //     }
    //     console.log(x); //erorr
    // }
    // demo();


    // function demo(){
    //     if(true){
    //         let x;
    //         x=10;
    //     }
    //     console.log(x); //error
    // }
    // demo();
    // console.log(x);//error


    function demo(){
        let x; //global scope
        if(true){
            x=10;
        }
        console.log(x)
    }
    demo();