// if we have to print several statement many times in out program than we have to make function by calling that function we ca nprint all statemnet without writing the hard code like.
console.log('a');
console.log('d');
console.log('e');
console.log('e');
console.log('l');

// and we have to print all these staement 5 times in our progrma than we will made a function to print these outputs.
function print() {
    console.log('a');
    console.log('d');
    console.log('e');
    console.log('e');
    console.log('l');
}

//after creating that function we will call it when we need to print these statements.
print()//will print all 5 statements
print()//will print all 5 statements

// if we have make a function that adds two nubers
function add2number(number1, number2) {
    // number1 and number2 are called paramaters
    console.log(number1 + number2);

}
add2number//if we write just the name than it will give a refferece and nothing will be printed
add2number(5, 8)//this is is refference plus execution(and 5,8 are arguments that we pass to function)
let result = add2number(5, 8)// 13 will not be stored in the result the function is not returning anything if we have to pas value in the other variable than we have to follow the following syntax

function add2number(number1, number2) {
    /*
    we can also return sum by folllowing piece of code
let result=number1+number2
return result
*/
    return number1 + number2

}
let sum = add2number(5, 8)//now value will be stored in sum and we can print it
console.log('sum is: ', sum);

function userloggedin(username) {
    console.log(`${username} just loggen in to website.`);
}
//userloggedin("Adeel Arshad")
// if we want to add a check that if user do not enter his name than following infromation should be shown. if we donot do that than output will be "undefined user has logged in"
function userloggedin1(username) {
    if (username === undefined) {
        // we can also write if(!username) that will work same as username===undefine
        console.log('Plz enter your name!');
        return //if we do not write that statement than the other statement will also be shown 
    }
    console.log(`${username} just loggen in to website.`);// it will be printed if the baove condition is flase or when user will enter his name other wise statement written in if condition will be executed

}
userloggedin1("Adeel Arshad")
// we can set a default value it will be useed when user will not tenter his name. when user will enter his name this name will be overwritten.

function userloggedin1(username = "unknown") {
    if (username === undefined) {

        console.log('Plz enter your name!');
        return
    }
    console.log(`${username} just loggen in to website.`);

}
