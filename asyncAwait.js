// async function restaurant() {
//     try {
//         const food = await orderFood();
//         const preparedFood = await prepareFood(food);
//         const result = await eatFood(preparedFood);
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }

async function orderFood1(){
    try{
        const food =await orederFood();
        const preparedFood= await preparedFood(food);
        const result= await eatfood(preparedFood);
        console.log(result);
    } catch(error){
        console.log(error);
    }
}

function getData() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("Data received!");

        }, 2000);

    });

}

async function displayData() {

    console.log("Starting");

    const result = await getData();

    console.log(result);

    console.log("Finished");

}

displayData();


//error handling

function getUser() {

    return new Promise((resolve, reject) => {

        reject("Unable to fetch user");

    });

}

async function displayUser() {

    try {

        const user = await getUser();

        console.log(user);

    } catch (error) {

        console.log(error);

    }

}

displayUser();


// api using async await

async function getUsers() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.log("Error:", error.message);

    }

}

getUsers();