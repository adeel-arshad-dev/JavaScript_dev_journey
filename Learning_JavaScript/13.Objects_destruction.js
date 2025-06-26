/*
if we have to use a key of an object at more than one place than we destructure it to avoid writing the same code gain and again. here is how we done with it:

*/
let jsUser = {
    Full_name: "Adeel Arshad",
    email: "adeel@google.com",
    age: 20,
    "location": "lahore",
}

const {Full_name}=jsUser//object destructured
console.log(Full_name);
//if we found that the key is too long to write we can change it as:
const {Full_name:name}=jsUser
console.log(name);

/* data from API comes in the two format
1.As an object(just key and values are defined.without object name)
2.As an Array containing objects
*/
// First format
{
  //  "name":"adeel arshad",
  //  "mail":"ad@google.com"
}
//second format
[
    {},
    {},

]