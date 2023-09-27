const miliseconds = 100
const tours = 100
addEventListener("message", start, false);

function start(e) {
    var workerName = e.data;
    let currentTours = 1
    const intervalID = setInterval(() => {
        postMessage(getMessage(workerName, currentTours))
        if (currentTours === tours) clearInterval(intervalID)
        currentTours++
    }, miliseconds);
}

function getMessage(workerName, progress) {
    return JSON.stringify({
        workerName,
        progress
    })
}
