let myname = "adeel   "
// if i want that it should not count spaces but not with trim() using another function created in prototype
// Object.prototype.trulength=function(str){
//     console.log(str.trim().length);

// } this can be done in best method as following
Object.prototype.trulength = function () {
    console.log(this.trim().length);

}
console.log(myname.length);

trulength(myname)

//  -----------------< Prototypes and Inheritence >---------------------
// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.adeel = function () {
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyadeel = function () {
    console.log(`Hitesh says hello`);
}

// heroPower.adeel()
// myHeros.adeel()
// myHeros.heyadeel()
// heroPower.heyadeel()

// inheritance

const User = {
    name: "Adeel",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "programmer     "

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Adeel".trueLength()
"Mango".trueLength()

/*
-----------< *** important Notes ***>--------------
#1---> if we have created a new prototype of object than we can apply  that prototype on arrays and strings. but if we have created the prototype of Arrays or strings we cannot apply that prototype to objects.
the reason is that strings and Arrays at the end  are recognised as objects.that is the quality of javascript that it try to get parents and the parents of all in js is Object. so that is why the prototype created manually for the objects can be used for Arrays and Strings.
*/