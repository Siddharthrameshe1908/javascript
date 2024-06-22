// var parent = document.querySelector("div")
// var child = document.querySelector(".child")
// parent.addEventListener('click',function(){
//     alert("clicked parent")
// },true)
// child.addEventListener('click',function(){
//     alert("clicked child")
// })


function demo(event){
    alert("child")
    if(document.getElementById("input").checked){
        event.stopPropagation()
    }
}
function task(){
    alert("parent")
}