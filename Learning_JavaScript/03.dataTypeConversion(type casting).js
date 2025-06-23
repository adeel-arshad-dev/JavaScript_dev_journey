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