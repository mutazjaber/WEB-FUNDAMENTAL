
function changename(element) {
    if(element.innerText === "login"){
            element.innerText ="logout";
    } 
    else {  element.innerText="login"
    }
}
function remove(element){
    element.remove()
}
function massage(element){
    element.alert("Ninja was liked!");
}