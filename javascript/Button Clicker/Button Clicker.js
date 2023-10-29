
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
function alerto(){
    console.log("this is alert");
    alert("hello")
}