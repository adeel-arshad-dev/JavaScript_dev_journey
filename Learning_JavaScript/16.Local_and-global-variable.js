// The scope of a variable is meterd by its accessibility as the scope limiting are brackets {} the variable that is defined in this scope cannot be accessed outside that scope local variable can be accessed in its scope while global variable can be accessed in whole program it has no boundaries
let a=300;

if(true){
    let a=10;//local
const b=20;//local
var c=30//global
console.log(a);// will print 10 not 300 as in its scope it is assigned value of 10

}
console.log(a);// this will throw an error as it is out of its scope
//console.log(b);// same will happened here
console.log(c);//it will print its value as it is global variable
// *** imp ***
// the scope in nidejs(local machine) is somehow different while in the browser it is different