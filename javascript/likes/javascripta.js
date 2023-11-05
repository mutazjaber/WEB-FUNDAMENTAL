
function increaseLikes(targetId) {
    const likeCountElement = document.getElementById(targetId);
    let currentLikes = likeCountElement.innerText;
    currentLikes++;
    likeCountElement.innerText = currentLikes + 1;
    }
