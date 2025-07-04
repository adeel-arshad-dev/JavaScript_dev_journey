
/*
------------------< Important Notes >------------------

------------> 1. Property Descriptors in JavaScript:

Every object property in JavaScript has internal attributes called property descriptors.
        These define how the property behaves. The main descriptors are:
        writable`: If false, the value cannot be changed.
        enumerable`: If false, the property will not appear in loops like `for...in`.
        configurable`: If false, the property cannot be deleted or changed to a getter/setter.

 Example:
In `Math.PI`, its `writable` is false. So if you try to change `Math.PI`, it won’t give an error, 
but the value won't change.

To view property descriptors:

Object.getOwnPropertyDescriptor(object, "propertyName")


✅ Example:

const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descripter);
// Output: { value: 3.14..., writable: false, enumerable: false, configurable: false }


-------------------------------------------------------

📌 2. Difference between Enumerable and Iterable:

| Feature       | Enumerable                            
| Meaning       | A property that shows in `for...in`, `Object.keys()`
| Used with     | `for...in`or `Object.entries() in for...of` 
| Applies to    | Object properties     
| Requirement   | Property's descriptor has `enumerable: true` 

---------------------- iterable --------------------------->
<>meaning:       | A data structure that works with `for...of` 
<>used with:     | `for...of using obj.entriies()`,or using spread operator(`...`)
<>Applies to:    |   Arrays, Strings, Maps, Sets  
<>requirement:   |   Has a `[Symbol.iterator]()` method
✅ Summary:
- Plain objects are **enumerable**, but **not iterable**.
- Arrays, Strings, Maps, and Sets are **iterable**, but not always enumerable like objects.

-------------------------------------------------------

#3. Looping Over Objects: `for...in` vs `for...of`
---------> for...in` is used to loop over **keys** (property names) of an object.

const chai = { name: "ginger chai", price: 250 };
for (let key in chai) {
    console.log(key, chai[key]); // Outputs: name ginger chai, price 250
}

-------->for...of` is used to loop over **iterables** like arrays, strings, maps, etc.
If you want to use it on objects, convert them using `Object.entries()`:

for (let [key, value] of Object.entries(chai)) {
    console.log(`${key} : ${value}`);
}

 NOTE: You cannot directly use `for...of` on a plain object. Doing so will throw an error:

for (let [key, value] of chai) {} //  Error: chai is not iterable


-------------------------------------------------------
*/

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")// that will tell about the properties of that object.

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5// that will not give error but it will also not allow us to overwrite the value
// console.log(Math.PI);// 3.14... will be print (no change)

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function () {
        console.log("chai nhi bni");
    }
}

//  ------------< to set the properties of an objet
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Object.defineProperty(object name, 'key name', {
//     //writable: false,
//    // enumerable: true,
// ........
// })  >------------------------------- we have to write above code.

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    /*
    
    if we do not add this check if (typeof value !== 'function') than will print 
    the whole value of key orderchai as
    
    orderChai : function(){
        console.log("chai nhi bni");

        so we have to add a check(condition ) here
        */
     if (typeof value !== 'function') {

    console.log(`${key} : ${value}`);
     }
}
