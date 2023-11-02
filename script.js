const item = document.querySelector('#item')
const todoBox = document.querySelector('#todo-box');

item.addEventListener("keyup",function(event){
    if (event.key=="Enter"){
        todo(this.value)
        this.value=""
    }
})



const todo =(item)=>{
    const listItem=document.createElement("li");
    listItem.innerHTML=`
    ${item}
    <i class="fa-regular fa-circle-xmark"></i>
`
listItem.addEventListener("click",function(event){
    this.classList.toggle("done")
})
listItem.querySelector("i").addEventListener("click",function(event){
    listItem.remove()
})
todoBox.appendChild(listItem)

}