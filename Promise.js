// Promise

const myPromise= new Promise(( resolve, reject)=>{
    resolve("Promise is resolved successfully");
})

console.log(myPromise);

//.then
const myPromise1= new Promise(( resolve, reject)=>{
    resolve("resolve granted");
})

myPromise1.then((result)=>{
    console.log(result);
})

//.catch

const Mypromise = new Promise((resolve, reject)=>{
    // reject("Payment Failed");
    // resolve("hey");
});

myPromise
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("operation Completed");
});



fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log("Error:", error);
    });

