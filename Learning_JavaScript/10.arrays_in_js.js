
const myArr = [0, 1, 2, 3, "Adeel"];// arrays can contain a mix of different data types

console.log(myArr[4]);//output:Adeel
/*
 ***imp*** 
 javaScript Array copy operation creats shallow copies.***shallow copy*** is a copy whose copy share the same refference point mean any change in copy will change in first one.
 while in ***deep copy*** the variable does not share the same refference.
 */
// if we use that bracket[] while dynimically creating an array than it will throw an error so we will use () here
let myArr2 = new Array(1, 2, 3, "Arshad");
myArr.push(6);// will add a value at last
console.log(myArr);
myArr.pop(6);
console.log(myArr);// will remove last value
myArr.unshift(6);// will add 6 at index 0
myArr.shift(8);// will add 8 at last
console.log(myArr.includes(9));//will return boolean
console.log(myArr.indexOf(3));
const newstring = myArr.join()
//it will give all values as string and also the data type will be string (of newstring)

/*
***imp***
slice():
It exclude range value and does not chage the original array.like slice(1,3) 3 is excluded
splice():
It include the range value and remove these values from the array mean it changes the array.
*/

let arr = [1, 2, 3, 4, 5, 6];
let myn1 = arr.slice(1, 3)
console.log(myn1);//output:2,3 and arr will remain same.
console.log("Original Array afte slice() is =", arr);//same as above
let myn2 = arr.splice(1, 3);
console.log(myn2);//output:2,3,4 and arr will be changed to 1,5,6.
console.log("Original Array afte splice() is =", arr);//changed  

let fsc_college = ["lahore", "multan", "islamabad"]
let school = ["pindi", "faisalabad", "karachi"]
// when we push an array in other array the pushed array is stored in it as an element and we have to accesss these through two dimensional arrays
fsc_college.push(school);
console.log(fsc_college);
console.log(fsc_college[3][2]);// will give karachi

let allinst = fsc_college.concat(school);
console.log(allinst);
// we can concatinate the arrays by another method that is called spreader 
const institutes = [...fsc_college, ...school];
console.log(institutes);
// the above method is good to use as we can concatinate to or more arrays at once as we can write let concatinate3=[...array1,...array2,...array3,...array4]


let complex_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11, 12], 13], 14]
/*
if we have an array similar to above one and we have to arrange it as a single array than we can use the flat() method that Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.for he sake of our ease we can set its depth as infinity
*/
let coerced_array = complex_array.flat(Infinity)
console.log(coerced_array);
// if we have to convert an arry into stringbut this is for conversion of single string 
console.log(Array.from("Adeel"))// will print array of characters ;
/*
we can conert the objects,keys to the arrays by first telling it that whether i am conerting the object or its keys other wise it will return an empty array

*/
/* 
If we have to convert two or more strings into arrays than we will use Arrays.of() method but it will give whole string as an element

*/
let newArray = Array.of("Adeel", "Arshad")
console.log(newArray.join('').split(''));// that will change array into array of character as it was arrray having two string as its element
