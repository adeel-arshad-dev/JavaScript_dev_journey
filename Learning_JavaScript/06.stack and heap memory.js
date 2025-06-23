/*

#1.Stack Memory:
All premitive data types use stack memory. in which copy of one value is passed to other and if any change is made in other it does not affect the value of previous one.(recall!! call by value.)

#2.Heap Memory:
All non premitive data types use heap memory. if any change is made in other variable that was assigned value of first it directly changes the value of first.(recall!! call by refference.)

*/
let firstChannel="Code with harry";
let secChannel=firstChannel;
console.log(secChannel);//output: Code with harry
// if we made any chane in the secChannel
secChannel="apna college";
console.log(firstChannel);//output: Code with harry
console.log(secChannel);//Output:apna college

let user1={
    email:"student@gmail.com",
    password:"1122"
}
let user2=user1;
console.log(user2.email)//output:student@gmail.com
user2.email="teacher@google.com";
console.log(user1.email);//output:teacher@google.com
console.log(user2.email);//output:teacher@google.com

