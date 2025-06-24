const score = 400;
const balance = new Number(100);
console.log(balance);
/*

****** Note******
when we dynamically creat an neaw data type than it will be reffered as object for example
const balance = new Number (100);
now the variable "balane" has different kind of prototypes as we have studeis about the strings

*/

console.log(balance.toString().length);
console.log(balance.toFixed(2));//it will fix value upto 2   digit after the decimal like 100.00
const otherNumber = 123.7896;
console.log(otherNumber.toPrecision(4));// it will give precise value containing of 4 digit. first priority will be given to the whole numbers than decimal numbers will be rounded off. And keep in mind that it will return a string.
const hundreds = 10000000;
console.log(hundreds.toLocaleString());// by default it will be converted into us standards.But we can change its standard.As Following

console.log(hundreds.toLocaleString('en-PK'))
// we can check out mant other function os numbers like the maximim value of int that ca nbe stored its minimum value,etc
//+++++++++++++++++ MATH +++++++++++++
console.log(Math);// it will show that it consists of many prototypes.
console.log(Math.abs(-4));// Negative values will be converted into positive values
console.log(Math.round(4.56));//it will round of the value passsed
console.log(Math.ceil(4.2));//it will give 5 beacause if the given value is greater than whole number even difference is 0.01 it will add 1 in the given whole number for example if the given number was 4.1 the output will be 5.
console.log(Math.floor(4.99));//it will give always a whole number that is present even it is 4.99
console.log(Math.min(2, 4, 5, 6));
console.log(Math.max(2, 4, 5, 6));
//****imp concept*******
console.log(Math.random())//it will always show random value between 0 and 1
console.log(Math.floor((Math.random() * 10)) + 1);//it will give a integer
//if we have to write random number between 10 Nd 20 than
const max = 20;
const min = 10;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

