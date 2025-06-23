//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);// the output will be false

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions (in ki data type object hoti hy sometime function object bhi bola jata hy)

const heros = ["abcd", "efgh", "hijk"];
let myObj = {
    name: "Adeel Arshad",
    age: 20,
}
// now in this case the data type of myfunction will be function
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
// it will print symbol