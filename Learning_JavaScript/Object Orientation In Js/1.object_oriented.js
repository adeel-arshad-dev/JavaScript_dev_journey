/*
java script is basically a prototype based language. it does not have real classess but it provide more familiar
syntax for developers coming from class based languages like c++,java but under the hooks it works somewhat differently.
*/
const date=new Date()// this new key word is called constructor function

// ----------< objects leteral >---------
const user = {
    username: "adeel",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }
    this.greeting()
  // it will print greeting message of all the users first as when constructor will be called it will print greeting message.if we want that it should be print when we want than we can do that by writing
//   userOne.greeting() for userOne
//   usertwo.greeting() for usertwo where these lines will be written there output will be shown
    return this
}

/*

-------<  Issue Of Constructor >-----------

const userOne =  User("Adeel Arshad", 12, true)
const userTwo = User("malik", 11, false)
console.log(userOne);
this will give all the values of userTwo. as we have used the constructor its value will be updated and when we will call it with refference to constructor than its modified value will be shown. that's why we use new keyword.
*/
const userOne = new User("Adeel Arshad", 12, true)
const userTwo = new User("malik", 11, false)
// console.log(userOne.constructor); it eill return the refference of itself (function-> user)
console.log(userOne);
console.log(userTwo);
