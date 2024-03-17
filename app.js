const li=document.querySelector(".todo-list")
const text=document.querySelector(".form-todo input[type='text']")
const todoForm=document.querySelector(".form-todo")
todoForm.addEventListener("submit",(obj)=>{
    obj.preventDefault()
    const textValue=text.value
    if(textValue!=""){
        const newLi=document.createElement("li")
        newLi.classList.add("new-block")
        newLi.innerHTML=`
                       <span class="text">${textValue}</span>
                         <div class="todo-buttons">
                          <button class="todo-btn done">Done</button>
                            <button class="todo-btn remove">Remove</button>
                              </div>`

        li.appendChild(newLi)
        text.value=""
}
})

li.addEventListener("click",(obj)=>{
    if(obj.target.classList.contains("remove")){
        obj.target.parentNode.parentNode.remove()
    }
    if(obj.target.classList.contains("done")){
        const liSpan=obj.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration="line-through"

    }
})

















// const todoform=document.querySelector(".form-todo")
// const todoinput=document.querySelector(".form-todo input[type='text']")
// const todolist=document.querySelector(".todo-list")

// todoform.addEventListener("submit",(obj)=>{
//     obj.preventDefault()
//     const newTodoText=todoinput.value
//     if (newTodoText!=""){
//     const newli=document.createElement("li")
//     newli.classList.add("new-block");
//     console.log(newli)
//     const newListInnerHtml=`
//                         <span class="text">${newTodoText}</span>
//                         <div class="todo-buttons">
//                         <button class="todo-btn done">Done</button>
//                         <button class="todo-btn remove">Remove</button>
//                         </div>`
//     newli.innerHTML=newListInnerHtml
//     todolist.appendChild(newli)
//     todoinput.value=""}
// })

// todolist.addEventListener("click",(obj)=>{
//     if (obj.target.classList.contains("remove")){
//         const removeLi=obj.target.parentNode.parentNode
//         removeLi.remove()
//     }
//     if (obj.target.classList.contains("done")){
//         const liSpan=obj.target.parentNode.previousElementSibling;
//         liSpan.style.textDecoration="line-through"
//     }
// })


