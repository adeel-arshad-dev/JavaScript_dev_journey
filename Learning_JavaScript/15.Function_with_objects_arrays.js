function getitemPrice(itemPrice) {
    return itemPrice
}
// console.log(getitemPrice(200));
// if we have to pass the 3 values in a functiona and in same program we have to pass 5 values in that function so thereis no nedd to make a function that accepts 3 arguments and a function that accepts 5 argument we can do that with thee same function usinf the spred/rest operator
function acceptingMorevalues(...num1) {
    return num1
}

/*
if we write :
function acceptingMorevalues(val1,val2,...num1){
    return num1
}
than 100 will be stored in val1 and 200 will be stored in val2 and remaining will be used by the spread operator.
*/
console.log(acceptingMorevalues(100, 200, 300, 400));// but that will print an array of numbers 
let array = acceptingMorevalues(100, 200, 300)// now we can handle that array

// *** passing objects to a function ***

const user = {
    username: "Adeel",
    code: "1"
}

function passingobject(anyobject) {
    //  if we have to write the name and price of that user than we will follow the follwoinfg syntax
    console.log(`Username is ${anyobject.username} and his code is ${anyobject.code}`);

}
passingobject(user);
// we can set value of an object while pasing it into function

function passingObjectDirectly(anyobject) {
    console.log(`Username is ${anyobject.username} and his code is ${anyobject.code}`);

}
passingObjectDirectly({
    username: "Muhammad Adeel Arshad",
    code: "12",
})
// *** 

const myNewArrray = [1, 2, 3, 4, 5]
function PassingArray(anyArray) {
    console.log(anyArray[3]);

}
PassingArray(myNewArrray);
// we can pass an array directly into a function
PassingArray([19, 20, 30, 40])