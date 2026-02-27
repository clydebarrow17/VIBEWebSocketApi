export default function WebSocketController (io, socket) {
    const createOrder = (payload) => {
        // ...
        console.log("Create order event passed")
    }

    socket.on("testwsevent", createOrder);
}