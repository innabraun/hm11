let buttons=document.querySelectorAll(".btn")
window.addEventListener("keydown" , (e)=>{
    buttons.forEach(item =>{
         if(item.dataset.btn===e.key.toUpperCase()){
             item.classList.add("active")

         }else {
             item.classList.remove("active")
         }

    })
})