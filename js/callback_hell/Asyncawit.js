// asysnc await 
function loginUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("✅ User logged in");
      resolve("TOKEN_ABC_123");
    }, 1000);
  });
}

function fetchUserProfile(token) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("👤 Profile fetched using", token);
      resolve({ id: 1, name: "Subham" });
    }, 1000);
  });
}

function fetchDashboardData(userId) {
    const {id}=userId
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("📊 Dashboard data fetched for user", id);
      resolve({ sales: 1200, visits: 340 });
    }, 1000);
  });
}

loginUser().
then((token)=>fetchUserProfile(token)).then((userId)=>fetchDashboardData(userId)).then((data)=>{
    console.log(`data is fetched`,data)
}).catch((error)=>{
    console.log(error)
})