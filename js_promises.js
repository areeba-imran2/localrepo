const promise = new Promise((resolve,reject)=>{
     console.log("I am Promise");
     resolve("Success");
})

function myPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Wait for 2 seconds");
            resolve("Success");
        },2000);
    });
}

async function getPromise(){
    await myPromise();
}

getPromise();

// Error Handling

function division(x,y){
    try{
        if(x===0){
            throw new Error("Division By Zero");
        }
        return x/y;
    }
    catch(error){
        console.log("An error");
        return 0;
    }
    finally{
        console.log("Finaly part");
    }
}

console.log(division(3,1));

// JSON 

const car = {
    model: "Mustang",
    make: "Ford",
    year: 2020,
    features: {
        color: "red",
        transmission: "automatic",
    },
};

// Create a deep copy 
const carCopy = JSON.parse(JSON.stringify(car));

carCopy.year = 2021;
carCopy.features.color = "blue";
carCopy.features.airbags = 8;

console.log("Original Car Object:", car);



