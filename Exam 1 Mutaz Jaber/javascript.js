var cookieAlert = document.querySelector(".cookie")
function disapear(){
    cookieAlert.remove()
}

function alertempty(){
    alert("Your Cart is empty!")
}


function changePic(element){
    const image = document.getElementById('imagechange');
   image.src = "https://cdn.discordapp.com/attachments/1164193483884597331/1171085942346485810/succulents-2.jpg?ex=655b65c6&is=6548f0c6&hm=543025ceb1255d5e0ab184ca51dc2d9f2ac80af9a30e6c15785185ed852824c9&"
}
function changePicOld(element){
    const image = document.getElementById('imagechange');
    image.src = 'https://cdn.discordapp.com/attachments/1164193483884597331/1171085942027726878/succulents-1.jpg?ex=655b65c6&is=6548f0c6&hm=aa91ef827ce2694612ee407cc974088335c322c58e549122f44d5a6bcbc8557d&'
}

// // Select the image element using its ID
// const image = document.getElementById('my-image');

// // Update the image source
// image.src = 'new-image.jpg';