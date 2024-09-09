
game.consoleOverlay.setVisible(true)
control.runInParallel(function () {
    console.log(`connecting to wss://arcade-rtdb-default-rtdb.firebaseio.com/`)

    // string tests
    const ws = new WebSocket("wss://arcade-rtdb-default-rtdb.firebaseio.com/")
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