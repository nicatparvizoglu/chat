var chatmini=document.querySelector(".chat-mini")
var chat=document.querySelector("#chat")
var remove=document.querySelector(".remove-chat")
var chatArea=document.querySelector("#chat-input")
chatmini.onclick=function(){
    chat.classList.remove("active")
}
remove.onclick=function(){
    chat.classList.add("active")
}
chatArea.addEventListener("keyup",function(){
    console.log("nicat")
})