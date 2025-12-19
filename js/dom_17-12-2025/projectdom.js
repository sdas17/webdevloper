function timing(){
const obj=document.getElementById("root")
const data_1 = new Date().toLocaleTimeString()

obj.innerHTML=data_1
}
setInterval(() => {
    timing()

}, 1000);
const obj=document.getElementById("root")
obj.style.fontFamily='system'
obj.style.fontSize='200px'
obj.style.height='100vh'
obj.style.display='flex'
obj.style.justifyContent='center'
obj.style.alignItems='center'
obj.style.backgroundColor='yellow'
obj.style.color='black'

