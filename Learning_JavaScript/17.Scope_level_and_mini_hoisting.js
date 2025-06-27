function one() {
    const username = "Adeel Arshad";

    function two() {
        const website = "champ"
        console.log(username);

    }
    //console.log(website);// it will give an error as it is out of scope
    two()
}
one()

if (true) {
    let username = "malik"
    if (username === "malik") {
        let web = " youtube"
        console.log(username + web);

    }
    //console.log(web);// will give an error tht it is out of its scope

}
//console.log(username);// will give an error that it is out of its scope

// +++++++++++ Hoisting ++++++++++++++

console.log(addone(5));// we can do that if we have declared the function as addone is declared.here we can use the function before declaration.
//
function addone(num) {
    return num + 1
}

//console.log(addtwo(5));// we are unable to do that if we made the function as adddtwo is made sometime this addtwo is called expression .

let addtwo = function (num) {

    return num + 2
}
console.log(addtwo(6));// now it will work fine