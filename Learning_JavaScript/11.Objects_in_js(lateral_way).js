//that way of creating the object is called literal way of creating th objects we will discuss about the singleton way after that
let jsUser = {
    name: "Adeel Arshad",
    email: "adeel@google.com",
    age: 20,
    "location": "lahore",
}

/*
There are two ways of accessing the objects
1. using the dot operator(jsUser.name);
2. Using th bracket(jsUser)["name"]
both above methods are apllicable if you have keys without "" like name,email,age in this case. you cannot access location of jUseer using the dot Operator. the reason is that when we creat a key than the compiler or browser convert it into the string like "name". but it allows writing the syntax without "". so we can access it in both ways but if we have declared it as string than there is no way that we can access it with the dot operator.
*/
console.log(jsUser.name);
console.log(jsUser["name"]);
//console.log(jsUser.location);// will give an error
console.log(jsUser["location"]);

/*
in interview the question is asked how to use the symbol in keys so here is brief explanation:
first we have to declare the symbol
let mysym=symbol("key1")
then while creating the object follow that syntax 
[mysym]:"mykey1"
if we donot use the symbol it will be treated as String(when we check its data type)
*/
let mysym = Symbol("key1");
let mysym1 = Symbol("key2");
let user = {
    [mysym]: "declared as symbol",
    mysym1: "will be shown as string"
}
console.log(user[mysym]);//correct way to access the symbol key
console.log(user.mysym);//output:undefined
console.log(user.mysym1);//its data type will be also string
console.log(typeof user.mysym1);//output:string

// to change values of keys 
jsUser.email = "adeel@gmail.com";//the value will be updated
// if we want that no one can change the values of keys than we can freez that

//creating function 
jsUser.greeting = function () {
    console.log('Hello how Your experience is going with js');

}
console.log(jsUser.greeting);// this will show only function refference and nothing will show
console.log(jsUser.greeting());

/*
lets assume a situation that we have to access the keys of same object in a function than we will do that using ->| this.keyname.

*/
jsUser.greeitng2 = function () {
    console.log(`Hello! ${this.name} How you deal with js. `);// fi we don't use this keyword than we will be unable to access th keys of that object
}
console.log(jsUser.greeitng2());
