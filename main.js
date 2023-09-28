const worker = new SharedWorker("worker.js")
const log = document.getElementById("log")

worker.port.addEventListener("message", e => {
    log.textContent += "\n" + e.data
})

worker.port.start()
worker.port.postMessage("ping")
