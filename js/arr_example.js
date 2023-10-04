let arr1 = [10, 8, 52, 10, 8, 5, 6, 5, 10];
let arr2 = [1, 5, 6, 9];

//----example 1  Finding the maximum element in an array ------------
const maxArr = (arr1) => {
    let max = arr1[0];
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] > max) {
            max = arr1[i];
        }

    }
    console.log(max)
}

//----example 2 Finding the minimum element in an array ------------
const minArr = (arr1) => {
    let min = arr1[0];
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] < min) {
            min = arr1[i];
        }
    }
    console.log(min)
}

//----example 3 Sorting an array in ascending order ------------
const sortAsc = () => {
    let temp;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = i + 1; j < arr1.length; j++) {
            if (arr1[j] < arr1[i]) {
                temp = arr1[i];
                arr1[i] = arr1[j];
                arr1[j] = temp;
            }
        }

    }
    console.log(arr1);
    console.log(arr1[0], arr1[arr1.length - 1]);

}

//----example 4 Sorting an array in descending order. ------------
const sortDec = () => {
    let temp;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = i + 1; j < arr1.length; j++) {
            if (arr1[j] > arr1[i]) {
                temp = arr1[i];
                arr1[i] = arr1[j];
                arr1[j] = temp;
            }
        }

    }
    console.log(arr1);
    console.log(arr1[0], arr1[arr1.length - 1]);

}

//----example 5  Reversing an array ------------

const reverseArr = (arr1) => {
    let newArr = [];
    for (let i = arr1.length - 1; i >= 0; i--) {
        newArr.push(arr1[i]);
    }
    console.log(newArr);
}

//----example 6 Finding the sum of all elements in an array ------------
const sumArr = (arr1) => {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum = sum + arr1[i];
    }

    console.log(sum);
}


//----example 7 Finding the average of all elements in an array ------------
const sumAvgArr = (arr1) => {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum = sum + arr1[i] / arr1.length;
    }
    console.log(sum);
}

//----example 8 Checking if an array contains a specific element ------------
const chkElem = (arr1, elem) => {
    let temp;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === elem) {
            temp = elem;
            break;
        }
    }
    if (temp) {
        console.log(temp + " is available..");
    } else {
        console.log(elem + " is not available..");
    }
}

//----example 9  Removing duplicates from an array ------------
const removeDuplicates = (v) => {
    let uniqueArr = [];
    uniqueArr.map((v) => {
        if (!uniqueArr.includes(v)) {
            uniqueArr.push(arr1);
        }
    })
    console.log(uniqueArr)

}
// let arr = ["apple", "mango", "apple", "grapes", "apple", "mango", "banana", "mango"];

// const removeDuplicates = (arr) => {
//     let uniqueArr = [];
//     for (i = 0; i < arr.length; i++) {
//         if (uniqueArr.indexOf(arr[i]) === -1) {
//             uniqueArr.push(arr[i]);
//         }
//     }
//     console.log(uniqueArr);

// }

//----example 10 Merging two arrays into a new array ------------


// let ar1 = [1, 4, 8, 9];
// let ar2 = [7, 3, 2];

// // let ans = ar1.concat(ar2);
// // console.log(ans)

// const mergeArr = (ar1, ar2) => {
//     let newArray = [];
//     for (let i = 0; i < ar1.length; i++) {
//         newArray.push(ar1[i]);
//     }
//     for (let i = 0; i < ar2.length; i++) {
//         newArray.push(ar2[i]);
//     }

//     console.log(newArray)
// }

const mergerArr = (a1, a2) => {
    let newArr = [];

    for (let i = 0; i < a1.length; i++) {
        newArr.push(a1[i]);
    }
    for (let i = 0; i < a2.length; i++) {
        newArr.push(a1.length[i] + a2[i]);
    }
    console.log(newArr);
}

//----example 11 Splitting an array into two arrays based on a condition ------------

let orgArray = [1, 'soni', 2, 3, 'dhanshu', 4, 'surat'];

const splitArr = (v) => {
    let numArr = orgArray.filter(typeof (v) === 'number');
    let strArr = orgArray.filter(typeof (v) === 'string');

    console.log(numArr);
    console.log(strArr);
}

// const splitArr = () => {

//     for (let i = 0; i < orgArray.length; i++) {
//         if (orgArray[i] % 2 === 0) {
//             // array1.push(orgArray[i]);
//         } else {
//             array2.push(orgArray[i]);
//         }
//         console.log(array1, "even numbers");
//         console.log(array2, "odd numbers");

//     }
// }

//-------example 13 Rotating an array by a given number of positions-------

let arr3 = [1, 2, 3, 4, 5];
const rotateArr = (arr3, n) => {
    for (let i = 0; i < n; i++) {
        let res = arr3.pop();
        arr3.unshift(res);
    }
    console.log(arr3)
}


//------example 14 Finding the second largest element in an array ------

let arr4 = [100, 20, 4, 6, 30];
const secondLargest = () => {
    for (let i = 0; i < arr4.length; i++) {

    }

}


//----example 17 Finding the median of an array ------N

let ar4 = [10, 20, 5, 8, 6];
const medianArr = () => {
    let sArr = ar4.sort((a, b) => b - a);
    console.log(sArr)
    for (let i = 0; i < ar4.length; i++) {
        if (ar4.length % 2 === 0) {
            let index1 = sArr / 2;

            console.log(index1)

        } else {
            let index = Math.floor(ar4.length / 2);
            console.log(index);
        }
    }

}

//example 19 Checking if two arrays are equal or not.

let array1 = [1, 2, 3];
let array2 = [1, 2, 3];
// const array3 = [1, 2, 4];
const compareArr = () => {
    if (array1.length !== array2.length) {
        console.log("array not same")
    } else {
        flag = true;
        for (let i = 0; i < array1.length; i++) {
            if (array1[i] !== array2[i]) {
                flag = false;
                break;
            }
        }
    }


    if (flag) {
        console.log("array same");
    } else {
        console.log("array not same");
    }

}
// compareArr(array1,array2)
// const arrayEqual = (arr1, arr2) => {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }
//     return arr1.every((element, index) => element === arr2[index]);
// }

// console.log(arrayEqual(array1, array2)); // true
// console.log(arrayEqual(array1, array3)); // false

//example 23  Finding the index of the first occurrence of an element in an array.

let number = [1,2,3,4,4,5,7,8,7];
const firstChek = (arr)=>{
    let ans = number.indexOf(7);
    console.log(ans); // 2

}
firstChek(number)
// const index = city.indexOf('vapi');
// console.log(index); // 2

//example 24 Finding the index of the last occurrence of an element in an array.

let arry1 = [5, 12, 50, 130, 44,50];
// const find = arry1.findLast((element) => element > 45);
// console.log(find);//130
const lastElem =()=>{
    let find = arry1.lastIndexOf(50);
    console.log(find)
}
lastElem(array1);


//example 25 Removing all occurrences of an element from an array.

let array4 = [100, 10, 100, 40];
const removeAllOcc = (arr, elem) => {
    console.log(arr, elem)
    let ans = arr.filter((v) => v !== elem);
    console.log(ans);
}
// removeAllOcc(array4,100,99)

// const orgArr = [1, 2, 3, 4, 3, 5];
// const elemRemove = 3;

// const removeElemArray = (arr, elemRemove) => {
//     return arr.filter(item => item !== elemRemove);
// }
// const newArray = removeElemArray(orgArr, elemRemove);
// console.log(newArray); // [1, 2, 4, 5]


//example 26  Replacing all occurrences of an element in an array with a new element.

const replaceAll = (arr, oldElem, newElem) => {
    let ans = arr.map((v) => v === oldElem ? newElem : v);
    console.log(ans);

}
// replaceAll(array4,100,70)

// const myArray = [1, 2, 3, 2, 4, 2, 5];
// console.log(myArray)
// const oldElement = 2;
// const newElement = 6;

// const replaceAll = (arr, oldElement, newElement) => {
//     arr.forEach((element, index, array) => {
//         if (element === oldElement) {
//             array[index] = newElement;
//         }
//     });
// }

// replaceAll(myArray, oldElement, newElement);

// console.log(myArray);[1, 6, 3, 6, 4, 6, 5]


// example 27  Creating a new array with the elements of the original array in reverse order, without modifying the original array.
let arr = [100, 10, 50, 60, 40, 99, 96];
let ans = arr.sort((a, b) => b - a).reverse();
console.log(ans);

// example 28. Checking if an array is sorted in ascending order.
let array=[10,3,40,50]
const sortArrAsc = () => {
        flag = true;
        for (let i = 0; i < array.length; i++) {
            for (let j = i+1; j < array.length; j++) {

            if (array[i] > array[j]) {
                flag = false;
                break;
            }
        }
        }
    

    if (flag) {
        console.log("Ascending order");
    } else {
        console.log("Not Ascending order");
    }

}

const sortArrDesc = () => {
    flag = true;
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {

        if (array[i] < array[j]) {
            flag = false;
            break;
        }
    }
    }


if (flag) {
    console.log("Desc order");
} else {
    console.log("Not Desc order");
}

}

sortArrDesc(array)


sortArrAsc(array)
//example 30. Finding the first three maximum number's sum an array.
const maxThree = () => {
    let sum = arr.sort((a, b) => b - a).
        slice(0, 3).reduce((acc, v) => acc + v);

    console.log(sum);

    // let answer = data1.reduce((acc, v, i) => acc + v, 0);

}

// maxThree(arr4)

sortArrAsc()








// medianArr(ar4)
// maxArr(arr1);
// minArr(arr1);
// sortAsc(arr1);
// sortDec(arr1);
// reverseArr(arr1);
// sumArr(arr1);
// sumAvgArr(arr1);
// chkElem(arr1,10)
// removeDuplicates(arr)
// mergeArr(newArray)
// splitArr(orgArray)
// removeDuplicates(arr1)
// mergerArr(arr1,arr2)
// rotateArr(arr3,3)
// secondLargest(arr4)
