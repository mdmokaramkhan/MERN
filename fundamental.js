// let city = "Banglore"
// city = "Delhi"
// console.log(city)

// const country = "India"
// console.log(country)

// // country = "USA"
// console.log(country)

// let marks = 90
// let student = "John" // string
// let isPass = true // boolean
// let isFail = false // boolean
// let x; // undefined
// let y = null; // null

// console.log("marks: ", marks)
// console.log("student: ", student)
// console.log("isPass: ", isPass)
// console.log("isFail: ", isFail)
// console.log("x: ", x)
// console.log("y: ", y)

// // type of variables
// console.log("type of marks: ", typeof marks)
// console.log("type of student: ", typeof student)
// console.log("type of isPass: ", typeof isPass)
// console.log("type of isFail: ", typeof isFail)
// console.log("type of x: ", typeof x)
// console.log("type of y: ", typeof y)

// // Other number types:
// let a = NaN
// let b = Infinity
// let c = -Infinity

// // console.log("a: ", a)
// // console.log("b: ", b)
// // console.log("c: ", c)

// // console.log("type of a: ", typeof a)
// // console.log("type of b: ", typeof b)
// // console.log("type of c: ", typeof c)


// let a = Infinity
// console.log("a: ", a) // Infinity
// console.log("type of a: ", typeof a)

// let b = -Infinity
// console.log("b: ", b) // -Infinity
// console.log("type of b: ", typeof b)

// let c = NaN
// console.log("c: ", c) // NaN
// console.log("type of c: ", typeof c)

// let d = 1.23e4


// let age = "20"
// Number(age)
// console.log("age: ", parseInt("20.243"))
// console.log("age: ", age)
// console.log("type of age: ", typeof age)

// Strings 

// let firstName = "John"
// let course = 'JavaScript'

// firstName.length
// firstName.toUpperCase()
// firstName.toLowerCase()
// firstName.includes("o")

// // Template Literals

// let message = `Hello ${firstName}, welcome to ${course}`
// console.log(message)

// let a = 20, b = 30
// let result = `The sum of ${a} and ${b} is ${a + b}`
// console.log(result)

// Scope of variables

// let a = 20
// {
//     var b = 30 // global scope
//     console.log(a) // 20
// }
// console.log(b)

// hoisting
// console.log(c)
// var c = 40 // undefined
// console.log(c) // 40

// console.log(a)
// let a = 20
// console.log(a)

// console.log(b)
// const b = 30
// console.log(b)

// Parse function inside a function in java
// for(let i = 2; i <= 20; i += 2) {
//     console.log(i)
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for(let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])
// }

// numbers.forEach((number, index) => {
//     console.log(number,",", index)
// })

// let student = {
//     name: "John",
//     age: 20,
//     city: "New York"
// }
// for(let key in student) {
//     console.log(key,",", student[key])
// }

// student.forEach(function(key, value) {
//     console.log(key,",", value)
// })

// function add(a, b) {
//     return a + b
// }
// let result = add(10, 20)
// console.log(result)

// let subtract = function(a, b) {
//     console.log(a - b)
//     return a - b
// }

// subtract(10, 20)

// // arrow function
// let s = (a,b) => {return a-b}


// let square = x => x * x;

// console.log(square(4))

// IIFE - Immediately Invoked Function Expression
// (function(params) {
//     console.log("Hello "+ params)
// })("Ankit");

// let a =  { b : 10 }
// let b = a
// b.b = 5;

// console.log(a)

// let person = {
//     name : "Amit",
//     greet : function() {
//         console.log("Hello "+ name)
//     }
// }
// name = "IWBSdhb"

// person.greet()

let person = {
    name : "Amit",
    address : {
        city : "New York",
        state : "NY"
    }
}

for(let key in person) {
    if(typeof person[key] === "object") {
        for(let key2 in person[key]) {
            console.log(key2,",", person[key][key2])
        }
    } else {
        console.log(key,",", person[key])
    }
}

// Arrays
let a = [1, 2, 3, 4, 5]

let a1 = ["Amit", "John", "Jane", "Jim", "Jill"]

a1.push("Ankit")
a.push("Ankit")
console.log(a)
console.log(a1)
