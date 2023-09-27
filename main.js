let counter = 1

document.getElementById("addWorker").addEventListener("click", e => {
    createWorkerUI()
    const worker = new Worker("worker.js")
    worker.addEventListener("message", (e) => updateWorkerUI(e))
    worker.postMessage(counter)
    counter++
})

function createWorkerUI() {
    var workerDesk = document.getElementById("workerDesk");
    var workerName = "progress-" + counter;
    var titleName = "title-" + counter;

    var worker = document.createElement("div");
    worker.setAttribute("class", "worker");

    var title = document.createElement("p");
    title.setAttribute("id", titleName);
    title.innerHTML = workerName + " (0%)";
    worker.appendChild(title);


    var progress = document.createElement("progress");
    progress.setAttribute("id", workerName);
    progress.setAttribute("value", "0");
    progress.setAttribute("max", "100");
    worker.appendChild(progress);

    workerDesk.appendChild(worker);
}

function updateWorkerUI(e) {
    const response = JSON.parse(e.data)
    const progress = document.getElementById("progress-" + response.workerName);
    progress.value = response.progress;

    const title = document.getElementById("title-" + response.workerName);
    title.innerHTML = "Worker-" + response.workerName + " (" + response.progress + "%)";
}
