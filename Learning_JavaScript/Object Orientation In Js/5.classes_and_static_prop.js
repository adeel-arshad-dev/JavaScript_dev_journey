
class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }
// in classes we have not to write the keyword function while declaring a function
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const user2 = new User("user", "chai@gmail.com", "123")

console.log(user2.encryptPassword());
console.log(user2.changeUsername());

// if we were not using the concept of class than we have to perform the above function as following( by function())

function User2(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User2.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User2.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const user3 = new User2("tea", "tea@gmail.com", "123")

console.log(user3.encryptPassword());
console.log(user3.changeUsername());
// -------------< static properties >-----------
// we use static keyword to protect that function from access even to the object of same class or inherited class
class User1 {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const hitesh = new User1("hitesh")
// console.log(hitesh.createId())// this wil give an error

// we use extend keyword to inherit the class from other class
class Teacher extends User1 {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
// console.log(iphone.createId()); this will also give an error