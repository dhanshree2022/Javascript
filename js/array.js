// //create array
// const sports = ['cricket', 'hockey', 'badminton','football'];

// // access element with index
// console.log(sports[0]); // cricket
// console.log(sports[1]); //  hockey
// // console.log(sports[1]);

// // add elements in array by assigning new values to specific indexes
// sports[2] = 'xyz';
// console.log(sports); // ['cricket', 'hockey', 'badminton','vollyball']

// //push elements end of array
// sports.push('football');
// console.log(sports); // ['cricket', 'hockey', 'badminton','vollyball',football]

// //pop remove element from array
// sports.pop();
// console.log(sports); // ['cricket', 'hockey', 'badminton','vollyball'];

// // shifrt remove  first element from the array.
// sports.shift();
// console.log(sports); // ['hockey', 'badminton','vollyball']

// //unshift add element at the begining of array
// sports.unshift('tennis');
// console.log(sports); // ['tennis','hockey', 'badminton','vollyball']

// //splice Add or removes elements from any position in array.
// sports.splice(1, 1, 'chess'); 
// console.log(sports); // ['tennis','chess', 'badminton','vollyball']

// // concate combine 2 array 
// const sports1 = ['puzzles', 'carrom'];
// const sports2 = sports.concat(sports1);
// console.log(sports2); // ['tennis','chess', 'badminton','vollyball',''puzzles','carrom']


// // slice extract elemnt from the index position
// const slicedArray = sports.slice(1, 3); 
// console.log(slicedArray); //  ['chess', 'badminton']

// //for loop
// for (let i = 0; i < sports.length; i++) {
//     console.log(sports[i]);
//   }  // tennis chess badminton vollyball
  
// //foreach 
// sports.forEach(function (sport) {
//     console.log(sport);
//   }); // tennis chess badminton vollyball
  



let data = [25,8,'dhanshu',85,'surat'];
let data1 = [99,100,8,64,1];
let data2 =['dhanshu','soni','dolly','akshu'];

// let ans = data1.reverse();
// console.log(ans)

// let ans = data1.sort((a,b)=>b-a);
// console.log(ans)
// let ans = data1.sort((a,b)=>a-b);
// console.log(ans)
// let ans = data1.sort();
// let ans1 = data2.sort();
// console.log(ans1);
// console.log(ans);

// let ans = data1.fill(0, 2);
// console.log(ans)

// let ans = data1.findIndex((v)=> v === 100);
// console.log(ans);

// let ans = data1.includes(101);
// console.log(ans)

// let ans = data1.every((v) => v > 0);
// console.log(ans)
// let ans = data.indexOf('dhanshu');
// console.log(ans);

// let ans = data.lastIndexOf('dhanshu');
// console.log(ans);


// data.map((v, i)=>{
//     if(v > 15){
//         console.log(v)
//     }
// })
// let ans = data.map((v, i)=>{
//     if(v > 15){
//         return v;
//     } else {
//         return 0;
//     }
// });
// console.log(ans);

// let ans1 = data.filter((v, i) => v > 15 && v < 50);
// console.log(ans1);

// let answer = data1.reduce((acc, v, i) => acc + v, 0);
// console.log(answer)

// console.log(data);
// console.log(data[3]);

// for(let i=0; i<data.length;i++){
//   console.log(data[i])
// }

// data.forEach((value,index)=>{
//   console.log(index + "--->" + value);
// })

// data.map((value,index)=>{
//   console.log(index + "--->" + value);
// })

// data.map((v,i)=> console.log (i + "..."+ v))

// data [3]= 99;
// console.log(data);

// data.push(97);
// console.log(data)

// data.unshift(100);
// console.log(data)

// data.splice(3,0,98);
// console.log(data)

// data.pop();
// console.log(data);

// data.shift();
// console.log(data)

// data.splice(2,3);
// console.log(data)

// let ans = Array.isArray(data);
// console.log(ans);

// let ans = data.some((v)=> v>50);
// console.log(ans);

// let ans = data.find((v)=> v>50);
// console.log(ans);

// let fullname = "Dhanshree Ravindra Shinde";
// let ans = fullname.split(" ");
// console.log(ans);

// let ans = data.slice(2,4);
// console.log(ans);

// let ans = data.toString();
// console.log(ans);