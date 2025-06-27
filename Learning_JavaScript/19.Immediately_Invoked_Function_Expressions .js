// sometime there is a problem from the pollution of global scope that contains many variables and to avoid from that pollution we have to make IIFE(Immediately Invoked Function Expression)

// to make a function IIFE we have to close it in parenthesis () and put a () at the end as
function nonIIFE(){
    // this function is non IIFE
    console.log('this wil not be invoked immediately');
    
}
// the IIFE function is given below
(function IIFE(){
    console.log('This function is IIFE and will be invoked immediately.');
    
})()