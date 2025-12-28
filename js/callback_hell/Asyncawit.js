// // // asysnc await 
// function loginUser() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("✅ User logged in");
//       resolve("TOKEN_ABC_123");
//     }, 1000);
//   });
// }

// function fetchUserProfile(token) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("👤 Profile fetched using", token);
//       resolve({ id: 1, name: "Subham" });
//     }, 1000);
//   });
// }

// function fetchDashboardData(userId) {
//     const {id}=userId
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("📊 Dashboard data fetched for user", id);
//       resolve({ sales: 1200, visits: 340 });
//     }, 1000);
//   });
// }



// before promoise we can used async await
// loginUser().
// then((token)=>fetchUserProfile(token)).then((userId)=>fetchDashboardData(userId)).then((data)=>{
//     console.log(`data is fetched`,data)
// }).catch((error)=>{
//     console.log(error)
// })
// async function greet(){
// const token = await loginUser()
// const value = await fetchUserProfile(token)
// const user_data = await fetchDashboardData(value)
// console.log(user_data);
// }
// greet()
// async function greet() {
//   const p1 = new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("p1 resolved");
//       resolve(10);
//     }, 1000);
//   });
//   return p1;
// }

// async function greet1(valueFromP1) {
//   const p2 = new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("p2 resolved");
//       resolve(valueFromP1 * 2);
//     }, 500);
//   });
//   return p2;
// }

// async function test() {
//     console.log('ssssssssssssssssssssssssssss');
//   const a = await greet();      // 10
//   const b = await greet1(a);   // 20
//   console.log(a, b);
// }
// console.log('hellow coder army');
// console.log('kaise ho');


// test();
// async function data(){
// return "data"
// }
// data().then((res)=>console.log(res))
function task1() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Task 1 done");
      resolve(10);
    }, 2000);
  });
}

function task2() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Task 2 done");
      resolve(20);
    }, 1000);
  });
}

async function runAll() {
  const [a, b] = await Promise.all([
    task1(),
    task2()
  ]);
  console.log(a, b);
}

runAll();
