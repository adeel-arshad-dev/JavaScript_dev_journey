// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// here string will be converted into number
// console.log("2" > 1);
// console.log("02" > 1);
/* sometime the browser will convert the null into 0 or sometime it will convert it into NaN */
console.log(null > 0);// output:false
console.log(null == 0);// output:false
console.log(null >= 0);// output: true
/* the code given below will give false result in all cases */
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === (strict checker: it checks both data type and value at a same time)

console.log("2" === 2);