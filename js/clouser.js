// let age = 27;  // global vaiable 

// //outer function
// const personalInfo = (name) =>{
//     let edu = 'B.Tech CE';  //outer functions variable
//     let DOB = '25-05-1997';
//     //ineer function
//     return allInfo =(salary) =>{
//         console.log(age);    //global variable
//         console.log(name);   // outer function parameter
//         console.log(edu);    // outer function variable
//         console.log(salary);  // inner function parameter
//         console.log(DOB);
//     }
// }
// //function call
// let res = personalInfo('dhanshree');
// console.log(res);    // return function
// res(20000);

// res(40000);





const incrementCounter = () =>{
    let count =0;
    
    return () =>{
        count = count +1;
        console.log(count);
    }
}

let result = incrementCounter();
console.log(result);
result();
result();result();


