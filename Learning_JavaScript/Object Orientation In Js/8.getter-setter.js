class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }
// if we do not use  underscore here than it will give us error 
// about maximium call stack reached due to competetion between the
//  constructor of class and getter/setter function
    get email(){
        // this underscore "-" is just used to overwrite it as private 
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}abcd`
    }

    set password(value){
        this._password = value
    }
}

const adeel = new User("h@fb.ai", "abc")
console.log(adeel.email);