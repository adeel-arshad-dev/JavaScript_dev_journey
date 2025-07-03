function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)// this will return refference to new execution context.
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);
/*
 SetUsername( username)------> when we use that function it is called but as
  it is called its is out from the execution context result in destroying the
   variable that's data it was stroring. so we will use .call and this to return
    values to the variables.
     SetUsername.call(this, username)
    */
