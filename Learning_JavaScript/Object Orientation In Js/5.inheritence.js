class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)// by using that keyword there is 
        // no need to use .call , this for returning variables it will automatically do that
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const user1 = new Teacher("user", "user@teacher.com", "123")

user1.logMe()
const user2 = new User("user2")

user2.logMe()// we can call the function of User class 
// for object of another class that is inherited from the user or Parent class


console.log(user1 instanceof Teacher);// true
console.log(User instanceof Teacher);// false