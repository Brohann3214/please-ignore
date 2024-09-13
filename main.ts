
game.consoleOverlay.setVisible(true)
control.runInParallel(function () {
    console.log(`connecting to wss://make-com.ddns.net:8080`)

    // string tests
    const ws = new WebSocket("wss://make-com.ddns.net:8080")
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
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 320
    export const ARCADE_SCREEN_HEIGHT = 240
}