onconnect = e => {
    const port = e.ports[0]
    port.postMessage(JSON.stringify(e))
    port.postMessage(JSON.stringify(e.ports))
    port.postMessage(JSON.stringify(port))
    port.postMessage("Hello Worl!")
    port.onmessage = e => {
        port.postMessage("pong")
    }
}
