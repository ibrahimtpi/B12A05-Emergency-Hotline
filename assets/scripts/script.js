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


// Call Button Functionality
const callBtns = document.getElementsByClassName('call');
for (const callBtn of callBtns) {
    callBtn.addEventListener('click', function (ele) {
        ele.preventDefault();
        const serviceName = ele.target.parentNode.parentNode.children[1].innerText;
        const serviceNumber = ele.target.parentNode.parentNode.children[3].innerText;

        const coins = document.getElementById('coin-count');
        const coinsValue = parseInt(coins.innerText);
        if (coinsValue >= 20) {
            let availableCoins = coinsValue - 20;
            coins.innerText = availableCoins;

            alert('Calling ' + serviceName + ' ' + serviceNumber + '...');

            // add to call history
            const callHistory = document.getElementById('call-history');
            const listItem = document.createElement('li');
            listItem.classList.add('mb-2');
            listItem.innerHTML = `<div class="flex justify-between items-center text-md bg-[#fafafa] p-4">
                                    <div>
                                        <p class="font-bold">${serviceName}</p>
                                        <p class="text-gray-600">${serviceNumber}</p>
                                    </div>
                                    <span class="text-gray-500">${currentTime()}</span>
                                </div>`;
            callHistory.appendChild(listItem);

        } else {
            alert('You do not have sufficient coins. To make a call you need at least 20 coins.');
        }        
    });
}
// get the current time hour: minute: second: AM/PM
function currentTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const strTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;
    return strTime;
}