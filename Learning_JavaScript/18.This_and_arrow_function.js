const user={
    username:"Adeel Arshad",
    code:2,
    welcomeMessage:function(){
        console.log(`${this.username}`);// if we write it only uername than  will give an error that username is not defined so we have to use this.username this keyword is used to adopt the current context mean current scope.
        console.log(this);// this will print all the values that are stored in the object as the values will be updated context will also be updated.
        
        
    }
}
user.welcomeMessage()// we cannot just use user.welcome meassage as it is accepting a function 
// now if we have to change the useContext(values) than we can do this by
user.username="saim"
user.welcomeMessage()// now saim will be printed and the username will be updated to saim
console.log(this);// this will print empty object as therer is no context in global

// *** importan note ***

// when this statement will run in browser it will give the "window object" as that object is present in browser

// this keyword will work in the objects when we will run it for the function than it will return undefined values
// function noUseOfThis(){
//     let username="Adeel"
//     console.log(this.username);// it will print undefined
    
// }
// noUseOfThis()// we should avoid using this keyword in the function.

/*
when we use console.log(this); for the function it return many things but when we use console.log(this); for the arrows function it returns empty object. and that is the main difference if arrow function and simple function.
*/

()=>{}// THAT IS THE DECLARAITON OF ARROW FUNCTION
// first method to return 
const addTwo=(num1,nnum2)=>{
    return num1+num2
}
// second method impicit way of returning in this method we donot use {} and return keyword just write ourcode in a single line
const addtwo=(num1,num2)=> num1+num2// tis will retun the sum
// third method user brackets
const addnum=(num1,num2)=> (num1+num2)// tis will also return the sum of two numbers
//4 method if we have to return an object than we have to follow that syntax
const returnObject=()=> ({username:"adeel"})// now this will return an object