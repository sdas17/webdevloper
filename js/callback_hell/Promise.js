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
fetch('http://api.weatherapi.com/v1/current.json?key=5fceec30cfe548d786b41607252812&q=India&aqi=no').then
((response)=>response.json())
.then((res)=>console.log(res))
.catch((error)=>console.log(error))