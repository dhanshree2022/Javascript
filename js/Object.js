// const person = {
//     name: "amit",
//     Age : "20"
// }
// console.log(person.name,person.Age);
// console.log(person["name"],person["Age"]);

// const person = [
//     {
//         name: "Amit",
//         age: 25,
//     },
//     {
//         name: "Piyush",
//         age: 40,
//     }
// ];

// person.map((v,i)=>{
//     console.log(v);
//     console.log(v.name ,v.age);
// })

// const person = [
//     {
//         name: "Amit",
//         age: 25,
//         course: [
//             "c",
//             "html"
//         ]
//     }
// ];

// person.map((v, i) => {
//     console.log(v.name, v.age);
//     v.course.map((v1) =>
//         console.log(v1))
// })

// const myObj = {
//     name: "jd",
//     age: 20,
//     cars: {
//         car1: "ford",
//         car2: "breza",
//         car3: "BMW"
//     }
// }

// for (let k in myObj) {
//     if (k === 'cars') {
//         for (let j in myObj[k]) {
//             console.log(myObj[k][j])
//         }
//     } else {
//         console.log(myObj[k])
//     }
// }

// const person = [
//     {
//         name: "amit",
//         age: 19,
//         course: {
//             c1: "c",
//             c2: "html"
//         }
//     },
//     {
//         name: "mayur",
//         age: 20,
//         course: {
//             c1: "c",
//             c2: "html"
//         }
//     }
// ];

// person.map((v) => {
//     for (let k in v) {
//         if (k === 'course') {
//             for (let j in v[k]) {
//                 console.log(v[k][j]);
//             }
//         } else {
//             console.log(v[k]);
//         }
//     }
// })



let data = {
    personal_info: {
        name: 'amit',
        age: 25,
        city: 'surat'
    },
    courses: ["C", "JavaScript", "React"],
    branches: {
        b1: {
            admission: 50,
            vacant_seat: 10
        },
        b2: {
            admission: 30,
            vacant_seat: 20
        },
        b3: {
            admission: 25,
            vacant_seat: 25
        },
        b4: {
            admission: 40,
            vacant_seat: 10
        }
    }
}

for (let k in data) {
    if (k === 'personal_info') {
        for (let j in data[k]) {
            console.log(data[k][j])
        }
    } else if(k === 'courses') {
        data.courses.map((v)=> console.log(v));
    } else if(k === 'branches'){
        for (let i in data[k]) {
            for(let a in data[k][i]){
                console.log(data[k][i][a])
            }
            // console.log(data[k][i])
        }
    } 
    // else{
    //     console.log(data[k])

    // }

}
//Dom Documnet object  model