function updateCountdown() {
    chrome.action.getBadgeText({}, function(text) {
        let timeParts = text.split(':');
        let formattedTime = formatTimePopup(timeParts[0], timeParts[1], timeParts[2]);
        document.getElementById('countdown').textContent = formattedTime;
    });
}

function formatTimePopup(hours, minutes, seconds) {
    return `${hours} hours, ${minutes} minutes, and ${seconds} seconds.`;
}

// Update the countdown every second.
setInterval(updateCountdown, 1000);