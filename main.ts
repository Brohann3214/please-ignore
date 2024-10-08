
game.consoleOverlay.setVisible(true)
control.runInParallel(function () {
    console.log(`connecting to ws://127.0.0.1:443`)

    // string tests
    const ws = new WebSocket("ws://127.0.0.1:443")
    ws.onerror = () => console.log("error")
    ws.onmessage = (msg) => {
        const data = msg.data;
        console.log(`[Recieved] ${data}`)
    }
    ws.onopen = () => {
        const msg = "connected. you Win";
        ws.send(msg);
        console.log(`[Sent] ${msg}`);
    }
})
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 320
    export const ARCADE_SCREEN_HEIGHT = 240
}