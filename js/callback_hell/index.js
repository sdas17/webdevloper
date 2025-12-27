function greet(data) {
    console.log("Age:", data.age);
}

function message(data) {
    console.log("First Name:", data.first_name);
}

function printag(callback) {
    console.log("Fetched information successfully");

    setTimeout(() => {
        const obj_data = {
            first_name: "Subham",
            last_name: "Das",
            age: 21
        };
        callback(obj_data);
    }, 2000);
}

printag(greet);
// function andar doosra argument pass karna 
