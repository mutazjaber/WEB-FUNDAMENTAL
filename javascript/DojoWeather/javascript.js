
function alerto(element){
    element.style.color = "red";
    alert("Loading weather report...");
}
var hider = document.getElementsByClassName(".cookie")
function dismiss(){
    hider.remove()
}



var Temp =document.querySelectorAll("#date-temp span")
console.log(Temp[1].innerText)
function changeTemp(element){
    
    if (element.value === "celsius"){
        for (let index = 0; index < Temp.length; index++) {
            Temp[index].innerHTML = Math.round(((parseFloat(Temp[index].innerHTML) - 32 ) * (5/9))) +"°C"
        }
    }
    else if(element.value === "fahrenheit") {
            for (let index = 0; index < Temp.length; index++) {
            Temp[index].innerHTML = Math.round(((parseFloat(Temp[index].innerHTML) * 9 / 5) + 32 ))+"°F"
            }   
        }
console.log(element.value)

}



