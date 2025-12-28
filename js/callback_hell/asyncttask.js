// // javascript is single thread language
// console.log("hello coder army")
// // 5
// //2
// //25
// // Program end
console.log('hello coder army');
// ===============================
// 1️⃣ Console Web API
// ===============================
console.log('Hello Coder Army');

// ===============================
// 2️⃣ Timer Web API (Async)
// ===============================
setTimeout(() => {
    const a = 2 + 4;
    console.log('After 5 sec:', a);
}, 5000);

setTimeout(() => {
    console.log('I am fast (3 sec)');
}, 3000);

// ===============================
// 3️⃣ Fetch Web API (Async)
// ===============================
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Data:', data);

        // ===============================
        // 4️⃣ Loops (Executed LAST)
// ===============================
        let b = 20;
        let arr = [20, 30, 11];

        console.log('Loop Output:');
        for (let i of arr) {
            console.log(i * b);
        }

        console.log('User Names:');
        for (let user of data) {
            console.log(user.name);
        }
    })
    .catch(error => console.error('Error:', error));

let b =20
let arr =[20,30,11]
for(let i of arr){
    console.log(i*b)
}