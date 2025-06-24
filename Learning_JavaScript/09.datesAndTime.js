let myDate = new Date();
console.log(myDate);// this will give the date in format that is somehow difficult lets change that onto strings
console.log(myDate.toString());//now this is giving the time and date of pakistani standards. if we just want the date or time than there are mny methods to do that.
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleDateString());
/*

If we want to add date of our will we can do that as following:

*/
let myOwnDate = new Date(2023, 4, 25);
//let myTimeAndDate= new date(2000,4,20,10,45,19)//we ca put time and date both
console.log(myOwnDate);//this will not give the suitable format.
console.log(myOwnDate.toString());
console.log(myOwnDate.toDateString());//now we can see the date in a proper format
let mycreatedDate = new Date("01-20-2025");
console.log(Date.now());
console.log(mycreatedDate.getTime());

//It will print the minutes that were passed after hour like if the time is 3:05 it will give 5

let newDay = new Date()
console.log(newDay.getMinutes());
console.log(newDay.getMonth() + 1);//it will return the index value so we have to add 1 in it

// there is a benifit to use the locale strings as we can play with some values with the help of objects like here we want whole day name
console.log(newDay.toLocaleString('default', {
    weekday: "long",
}));
// By using the locale string we can change many other things of date and time
