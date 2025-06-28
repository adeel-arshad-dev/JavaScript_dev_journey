/* #1...as we write code than it is handovered to the nodejs as Global Execution Context and will be 
refferd in the variable "this". if we run the code in browser than its Global Execution context is other(window object) while the Global
 Execution context of nodejs envirnoment is something else and javaScript is single threaded.
 #2... ther are two types of execution Context:
 1.Global Execution Context
 2.Function/Functional Execution Context
 3.Eval Execution Context(It is a property of Global Execution so it may or may not be included in the types)
*/
let val1 = 10
let val2 = 5
function sum(num1, num2) {
    let res = num1 + num2
    return res
}
let result = sum(val1, val2)
let result2 = sum(10, 2)
/*
lets discuss how tis code will be executed:

>>>>>> #1st step: <<<<<

Global Execution context will be executed and will be allocated into this keyword

>>>>>>> #2step: <<<<<

Memory creation phase: variables are gathered toghether
l1...val1->undefined,l2.....val1->undefined
l3..sum->definition of function
l7..result->undefined,l8..result2->undefined

>>>>>>> #3 rd step: <<<<<

Execution phase:
val1<-10,val2<-5
there is nothing to happen with the function in the execution phase
---------------------------------<imp> 
l7...as line7 has a function in it so there another Execution Context will be created
if we imagine execution context like a box than this will be containing a New Variable Envirnoment + Execution Thread and that box will be deleted after it is done. This whole process will be repeated when there will be another function even it is same because the previous one was deleted.
 Now again the cycle will repeat like memory creatio phase and execution phase for that Function as following:
 memory phase:
 val1->undefined,val2->undefined,total->undefined
 Execution Context:
 num1->10,num2->5,total->15 and that total will be returned in the global execution context as this function is returning the value.
 <imp/end>-------------------------------------------
 now after that whole proces the value of result in execution phase will become 15
 result->15
 and again in next line function is present so we will repeat the whole process of <imp> like:
 1.Creation of box that will hold(NVE+thread)
 2.memory phase: same will be repaeated for that function as the explanation was made for the result.
 3.Execution phase: same will happened but here values will be changed and total again will be returned in the global execution.
*/

// #Example1++++
function one() {
    console.log('one');
    Two()
}
function Two() {
    console.log('two');
    three()
}
function three() {
    console.log('three');

}
one()

// Example2 ++++++
function one() {
    console.log('one');

}
function Two() {
    console.log('two');

}
function three() {
    console.log('three');

}
one()
Two()
three()
/*
++++++CALL STACK++++++
when we execute a function than goes to a stack and after execution it is removed from that stack.

<++++Explanation of #Example1+++++>:

here we have threee functions first one() will be placed in the stack and as it will call two() as two() will be placed in the stack it will call three(). because of two() is inside one() and three() is inside two() and at a time all will be placed in the stack on completion first thrre() will be removed than two() than One().

<+++++ Explanation of #Example2+++++<
here one() will be placed in the  stack and after execution it will be removed. than two() will be executed and than it will be removed same with three().
so that was all about the call stack
*/