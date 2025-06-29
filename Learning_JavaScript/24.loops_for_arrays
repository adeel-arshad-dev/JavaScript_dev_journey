const array=[1,2,3,4,5]
for (const num of array) {
    console.log(num);
    
}
const greetings="Hello World"

for (const greet of greetings) {
    if(greet==" "){
        continue;// if we want to avoid from the spaces
    }
    // console.log(`Each char of greeting is ${greet}`);
    
}
// Map():The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.
const map=new Map()
map.set("PK","Pakistan")
map.set("CHI","china")
map.set("AUS","Australia")
map.set("PK","Pakistan")// if we repeat the same keay thanthis will not be stored twice map() follow the uniqueness
console.log(map);// this will retun obejct
// leats access it with forof loop

for (const [element,values] of map){ // if we want to get the values individually than we have to follow that syntax
    console.log(element,":->",values);// it 
    
}

const myobj={
    "game1":"pubg",
    'game2':"gta"
}

// for (const [element,values] of myobj) {
//    console.log(Key,':',values);// this will give eeor that object is not iterable for objects we can use forin loop
    
// }

const myobj1={
    js:"javacsript",
    cpp:"c++",
    rb:"ruby"

}

for (const key in myobj1) {
  console.log(key);// will give only keys
  console.log(myobj1[key]);// it will print all values of keys
  
   
}

const arr=[1,2,3,4,5]
for (const key in arr) {
  console.log(key);// will give the index values (keys) of arrays
  console.log(arr[key]);// will give the values of array
  
}
/*
the majoe difference between the forof and forin loop is :
forof loop return the values while forin loop return the keys but by putting [] brackets around the keys w can access values but at start it returns the keys. for both arrays and objects while forof loop return values for the arrays.

--------<Imp> forin loop is for the iterable like we can use forin for objects,arrays but we cannot use it for the Map() as map() is not iterable<Imp>----------
*/
/*
------------<About for each> when we check the prototype of arrays we find a foreach loop for the arrays so here is method to use that function for the arrays>------
------< call back function are function without name and foreach loops also geys call back function as there is given below>--------------
*/

let newarray=[1,2,3,4,5]
// newarray.forEach(function(item){
//     console.log(item);
    
// })
// ---< we can do the upper process with the help of arrow functio>---
// const newarray=[1,2,3,4,5]
// newarray.forEach((item)=>{
//     console.log(item);
//     // this arrow function will aslo work fine
// })

function refference(val){
    console.log(val);
    
}
// -----< if we want to add a function as refference() in foreach loop than only refference of that function will be given as following>-----
 newarray=[1,2,3,4,5,6]
newarray.forEach(refference)// this will give same output.
newarray.forEach((val,index,arr)=>{
console.log(val,index,arr);
})// it will give value stored at each index and all index values and whole array
/*
------< Data comes from the data base in the form of array of objects. and if we have to print any key of objject we can access that by using the foreach loop.>----
*/
let data=[
    {
        languagename:"Javacsript",
        FileName:"js"
    },
    {
        languagename:"java",
        FileName:"java"
    },
    {
        languagename:"python",
        FileName:"py"
    },
   // if we have to access language names than this can be done with the help of foreach loop
]

forEach((item)=>{
    console.log(item.languagename);// this will give name of all languages
    console.log(item.FileName);// this will give filename for all
    
})
