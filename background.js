let countdownDate;

chrome.runtime.onInstalled.addListener(() => {
    loadJSONAndUpdateCountdown();  // Load JSON and set countdown on extension install.
});

function loadJSONAndUpdateCountdown() {
    fetch(chrome.runtime.getURL('times.json'))
        .then((response) => response.json())
        .then((times) => {
            let now = new Date();
            let closestFutureTime;

            for (let time of times) {
                let timeDate = new Date(time);

                if (timeDate > now) {
                    closestFutureTime = timeDate;
                    break;
                }
            }

            if (!closestFutureTime) {
                // If no future times were found in the JSON file, set a default countdown.
                countdownDate = new Date().getTime() + 1000 * 60 * 60;  // Countdown to one hour from now.
            } else {
                countdownDate = closestFutureTime.getTime();
            }

            // Start the countdown.
            startCountdown();
        });
}

function startCountdown() {
    let intervalId = setInterval(() => {
        let now = new Date().getTime();
        let distance = countdownDate - now;

        if (distance < 0) {
            clearInterval(intervalId);
            chrome.action.setBadgeText({ text: 'Now!' });
            chrome.action.setTitle({ title: countdownMessage });  // Display the message when the countdown reaches zero.
            loadJSONAndUpdateCountdown();  // Reload JSON and update countdown when the countdown is over.
        } else {
            // Update the countdown in the badge text.
            chrome.action.setBadgeText({ text: formatTimeIcon(distance) });
        }
    }, 1000);
}

function formatTimeIcon(distance) {
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return `${hours}:${minutes}:${seconds}`;
}