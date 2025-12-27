// Step 1: Place Order
function placeorder(callback) {
  console.log("📞 Ordering pizza from Domino's...");

  setTimeout(() => {
    console.log("📍 Address entered & order placed successfully");
    callback();
  }, 2000);
}

// Step 2: Prepare Pizza
function prepared(callback) {
  console.log("🍕 Pizza preparation started...");

  setTimeout(() => {
    console.log("✅ Pizza prepared");
    callback();
  }, 2000);
}

// Step 3: Pickup
function pickup(callback) {
  console.log("🚴 Delivery partner is picking up the pizza...");

  setTimeout(() => {
    console.log("✅ Pizza picked up");
    callback();
  }, 2000);
}

// Step 4: Deliver
function deliver() {
  console.log("🏠 Delivering pizza...");

  setTimeout(() => {
    console.log("🎉 Pizza delivered successfully!");
  }, 2000);
}

placeorder(()=>{
    prepared(()=>{
        pickup(()=>{
            deliver()
        })
    })
})

// console.log('10')
// setTimeout(()=>{
//     console.log("23")
// },2000)
// console.log("20")
// console.log('10')
// const time =  Date.now()
// while (Date.now() - time < 2000) {
//   console.log('20');
// }
//     console.log('30')
