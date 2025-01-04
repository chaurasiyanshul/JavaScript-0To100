// Primitive 7 types : string, Number,Boolean,null, undefined,Symbol, Bigint
// call by value

const score = 100
const scoreValue = 100.3
const isLoggedin = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anoterId = Symbol('123')

const bigNumber = 2323234545456456455354n


// Reference(Non Primitive)

// Array, objects, Functions

const heroes = ['shakitman', 'nagraj', 'doga'];
let myObj = {
    name: 'hitesh',
    age: 22,
}

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof myFunction);

// type of Value : Result
// undefined: Undefined
// Null : Object
// Boolean : boolean
// string : string
// 