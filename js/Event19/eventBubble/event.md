<!-- event bubble



 -->

  const home =document.body
console.log(home,'101')
const buttons= document.querySelectorAll('button')
buttons.forEach((data)=>{
    data.addEventListener('click',(e)=>{
    home.style.backgroundColor=data.id

    })
}) 
