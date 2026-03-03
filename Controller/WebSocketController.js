import * as PlaygroundHelpers from '../Helpers/PlaygroundHelpers.js';
import * as Helpers from '../Helpers/MainHelpers.js';


// REF: https://socket.io/docs/v4/server-application-structure/
export default function WebSocketController (io, socket) {
    const createOrder = (payload) => {
        // ...
        console.log("Create order event passed")
    }

    const viewConnectionList = (payload) => {
        console.log(Helpers.connectionList)
    }

    const disconnectUser = (payload) => {
        console.log(payload); // [??] : Huh.jpg

        // REF : https://stackoverflow.com/a/47811118
        const userIndexInList = Helpers.connectionList.findIndex(field => field.userId === socket.handshake.query.userId);
        if (userIndexInList >= 0) Helpers.connectionList.splice(userIndexInList, 1);
    }


    //#region Socket List
        socket.on("testwsevent", createOrder);
        socket.on("view-connection-list", viewConnectionList);

        // REF: https://stackoverflow.com/a/17311682
        socket.on('disconnect', disconnectUser);

    //#endregion
}