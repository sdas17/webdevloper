// promise in js
// callbackhell

// async task

// settimeout
//setinteval
// fetch()

// The Promise object represents the eventual 
// completion (or failure) of an asynchronous 
// operation and its resulting value.

// wather :
// console.log(3+4)
// let Promoise = fetch('http://api.weatherapi.com/v1/current.json?key=5fceec30cfe548d786b41607252812&q=India&aqi=no')
// Promoise.then((response)=>
// response.json().then((data)=>{
//     console.log(data)
// })).catch((error)=>{
//     console.log(error);
    
// })
//  promise
     // pending
// resolve
// reject
// fetch('http://api.weatherapi.com/v1/current.json?key=5fceec30cfe548d786b41607252812&q=India&aqi=no').then
// ((response)=>response.json())
// .then((res)=>console.log(res))
// .catch((error)=>console.log(error))



// Step 1: Place Order
// const cart = ['checkitn', 'DOSA', 'SOMOSA'];

// function placeOrder(cart, cb) {
//   console.log("📞 Ordering food...");
//   setTimeout(() => {
//     const order = {
//       orderId: 221,
//       items: cart,
//       restaurant: "Subham Dosa Center"
//     };
//     console.log(`📍 Order placed restaurant name is ${order.restaurant}`);
//     cb(order);
//   }, 2000);
// }

// function prepareFood(order, cb) {
//      const {orderId}=order
//   console.log(`🍳 Food preparation started `,orderId);
//   setTimeout(() => {
//     const preparedOrder = {
//       ...order,
//       token: 124
//     };
//          const {items:[piiza,dosaa,somosa]}=preparedOrder

//     console.log("✅ Food prepared",piiza,dosaa,somosa);
//     cb(preparedOrder);
//   }, 2000);
// }

// function pickupFood(preparedOrder, cb) {
//   console.log("🚴 Pickup started...");
//   setTimeout(() => {
//     const pickedUpOrder = {
//       ...preparedOrder,
//       pickedUp: true
//     };
//     console.log("✅ Food picked up");
//     cb(pickedUpOrder);
//   }, 2000);
// }

// function deliverFood(order) {
//      const {}=order
//   console.log("🏠 Delivering food...");
//   setTimeout(() => {
//     console.log("🎉 Delivered successfully!");
//   }, 2000);
// }

// // callback chaining
// placeOrder(cart, (order) => {
//   prepareFood(order, (preparedOrder) => {
//     pickupFood(preparedOrder, (pickedUpOrder) => {
//       deliverFood(pickedUpOrder);
//     });
//   });
// });
// promooise used 
// chooseOrder → chooseRestaurant → placeOrder → success

// const added_cart = [];

// function chooseOrder(added_cart){
//      return new Promise(function(resolve,reject){
//               console.log("🛒 Choosing items...");
//           setTimeout(() => {
//                if (added_cart.length > 0) {
//         resolve(added_cart);
//       } else {
//         reject("❌ Cart is empty");
//       }
//           }, 3000);
//      })
// }
// function chooseRestaurant(added_cart) {
//        return new Promise((resolve, reject) => {
//               console.log("🏪 Choosing restaurant...");
//               setTimeout(()=>{
//                const restaurant={
//                     ...added_cart,
//                     restaurant :"suham_food_service"
//                }
//                if (restaurant) {
//                resolve(restaurant)

//                }else{
//         reject("❌ No restaurant available");

//                }
//               },1000)

//        })

// }
// function placeOrder(orderDetails){
// return new Promise((resolve) => {
//     console.log("📞 Placing order...",orderDetails);
//     setTimeout(() => {
//       resolve({
//         orderId: Date.now(),
//         ...orderDetails,
//         status: "Order Placed"
//       });
//     }, 1000);
//   });
// }
// chooseOrder(added_cart)
// .then(chooseRestaurant)
// .then(placeOrder).catch((error)=>{
//      console.log(error)
// })


// function checkResult(marks) {
//   return new Promise((resolve, reject) => {
//     if (marks >= 40) {
//       resolve("✅ Passed");
//     } else {
//       reject("❌ Failed");
//     }
//   });
// }
// checkResult(9).then((res)=>console.log(res)).catch((error)=>console.log(error))


// function loginUser(username) {
//   return new Promise((resolve, reject) => {
//     if (username === "admin") {
//       resolve("✅ Login successful");
//     } else {
//       reject("❌ Invalid user");
//     }
//   });
// }
// loginUser('subham').then((data)=>console.log(data)).catch((error)=>console.log(error))

// function isEven(num) {
//   return new Promise((resolve, reject) => {
//     if (num % 2 === 0) {
//       resolve("✅ Even number");
//     } else {
//       reject("❌ Odd number");
//     }
//   });
// }
// isEven(2).then((data)=>console.log(data)).catch((error)=>console.log(error))
// function hasData(data) {
//   return new Promise((resolve, reject) => {
//     if (data) {
//       resolve("📦 Data exists");
//     } else {
//       reject("❌ No data found");
//     }
//   });
// }
// hasData("subham").then((checkdata)=>console.log(checkdata)).catch((error)=>console.log(error))

// function fetchUser() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ id: 1, name: "Subham" });
//     }, 1000);
//   });
// }

// function fetchPosts(user) {
//      const {id,name}=user
//   return new Promise((resolve) => {
//     setTimeout(() => {
//      console.log(`employee id${id} and name of employee is ${name}`)
//       resolve([
//         { id: 101, title: "React Basics" },
//         { id: 102, title: "Elasticsearch UI" }
//       ]);
//     }, 1000);
//   });
// }

// function fetchComments(postId) {
//      const {id,title}=postId
     
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(["Nice post!", "Very helpful",id,title]);
//     }, 1000);
//   });
// }

// fetchUser()
// .then((user) => fetchPosts(user))
// .then((postId)=>fetchComments(postId[0]))
// .then((comment)=>{
//   console.log("Comments:", comment);
// }).catch((error)=>{
//      console.log(error)
// })
// function placeOrder() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("🛒 Order placed");
//       resolve("Order ID: 123");
//     }, 1000);
//   });
// }

// function prepareFood(orderId) {
//      console.log(orderId)
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("👨‍🍳 Food prepared for", orderId);
//       resolve("Food Ready");
//     }, 1000);
//   });
// }

// function deliverFood(foodStatus) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("🚚 Food delivered:", foodStatus);
//       resolve("Delivered Successfully");
//     }, 1000);
//   });
// }
// placeOrder().then((orderId)=>prepareFood(orderId)).then((foodStatus)=>deliverFood(foodStatus)).catch((error)=>{
//      console.log(error)
// })
