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

data.splice(2,3);
console.log(data)