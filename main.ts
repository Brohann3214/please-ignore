
game.consoleOverlay.setVisible(true)
control.runInParallel(function () {
    console.log(`connecting to ws://localhost:8080`)

    // string tests
    const ws = new WebSocket("ws://localhost:8080")
    ws.onerror = () => console.log("error")
    ws.onmessage = (msg) => {
        const data = msg.data;
        console.log(`[Recieved] ${data}`)
    }
    ws.onopen = () => {
        const msg = "Brohann test";
        ws.send(msg);
        console.log(`[Sent] ${msg}`);
    }
})