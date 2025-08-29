// Heart icon functionality
const heartBtns = document.getElementsByClassName('heart-icon');
const availableHeart = document.getElementById('total-heart-count');
let totalHeartValue = parseInt(availableHeart.innerText);
for (const heartBtn of heartBtns) {
    heartBtn.addEventListener('click', function (ele) {
        ele.preventDefault();
        totalHeartValue += 1;
        availableHeart.innerText = totalHeartValue;
    });
}