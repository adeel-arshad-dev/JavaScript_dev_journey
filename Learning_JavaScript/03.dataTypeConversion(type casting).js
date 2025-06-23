let score=33

console.log(typeof score);
console.log(typeof (score));
// both will give output as number

let scorea="33";
console.log(typeof scorea);
// this will print string
let anumber=Number(scorea) ;
console.log(anumber);
//this will print 33
let scoreb="undefined";
let bnumber=Number(scoreb) ;
console.log(bnumber);
//this will print NaN(not a number)
/* same if we convert a null data type into nnumber it will return 0. and if we convert undefined datatype to number it will return Nan */

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true


let a=33;
let b=string(a);
console.log(b);
console.log(typeof b);

// **********conversion***********
let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2); 
//first type will be seen in this case
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);