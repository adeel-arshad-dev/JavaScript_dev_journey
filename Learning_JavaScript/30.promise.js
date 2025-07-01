const promiseone = new Promise(function (resolve, reject) {
    // Do an asyn task
    //DB ChannelSplitterNode,cryptoGraphy,network calls
    setTimeout(function () {
        console.log('async task is complete');
        resolve()// that eill tell to than() that task is completed now you can perform function
    }, 1000)
})

promiseone.then(function () {
    console.log('promiseone is consumed.');// we ca print aht if we have resolve() in in our promise

})
// if we donot pass promise t o a variabl than we will make promise and cll than() in following way
new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('aync task 2 is completed');
        resolve()

    }, 1000);
}).then(function () {
    console.log('async 2 is resolved');

})

const promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "adeel", email: "adeel@google.com" })// if we want to pass values to than() we have  to pass these values to resolve() in the form of objects or arrays
    }, 1000)

})

promise3.then(function (user) {
    console.log(user);// so we can see that the data that we passed to resolve() can be accessed trogh then()

})

const promise4 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "adeel", code: "123" })
        }
        else {
            reject("Error:Something went wrong!")
        }
    }, 1000)
})
// when we try to return something using promise it cannot be stored on any variable. but we can store it in another then() using the method called chaining. And that is widely used when we fetch data from the databases and returns some values.

promise4
    .then((user) => {
        console.log(user);
        return user.username// now to det that value we have to add other then()
    })
    .then(function (username)// here we have to write the variable that we have returned
    {
        console.log(username);

    })
    .catch(function (error) {
        console.log(error);// this will show the error statement if we cannot fetch th data

    }).finally(() => {
        console.log('Finally!the promise is either resolve or rejected');

    })

promise5 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "js", code: "123" })
        }
        else {
            reject("Error:js went wrong!")
        }
    }, 1000)
})

// async function consumeP5(params) {
//    const response= await promise5
//    console.log(response);

// } async cannot handle erors directly as compared to promise but we can do that:

async function asyncErrorHandling(user) {
    try {
        const response = await promise5
        console.log(response);
    } catch (error) {
        console.log(error);

    }
}
asyncErrorHandling()
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
    .then((response) =>// we can use then() directly as feth() returns a promise in return. 
/*
--------< More about fetch():
#1----> it return a promise as return
#2----> we can pass objects or toher arguments to fetch() as fetch('url', {user:"adeel",code:"123"})

*/ {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error))


// Promise.all(promise1,promise2, and other if available) runs multiple promises in parallel and waits for all to complete. It returns a single promise that resolves with results of all or rejects if any one fails. It's useful for handling tasks like multiple API calls together.

/*
--------< updating username >------
In this code, we are sending a PUT request using fetch() to update a user's information on the server.
 We include headers to specify that we're sending JSON data and an authorization token for secure access. The user data (like username and email) is sent in the request body after being converted to a JSON string.
 Once the server responds, we handle the result or catch any errors that occur.


*/
//fetch("https://api.example.com/users/123", as this url does not exist so it will not work
// {
//   method: "PUT",
//   headers: {
//     "Content-Type": "application/json",
//     "Authorization": "Bearer your_token_here"
//   },
//   body: JSON.stringify({
//     username: "adeel_updated",
//     email: "adeel@example.com"
//   })
// })
// .then(response => response.json())
// .then(data => console.log("User updated:", data))
// .catch(error => console.error("Error:", error));
