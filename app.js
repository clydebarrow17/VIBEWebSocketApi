'use strict';
import 'dotenv/config';

import { createServer } from "http";
import { Server } from "socket.io";

import * as PlaygroundHelpers from './Helpers/PlaygroundHelpers.js';
import * as Helpers from './Helpers/MainHelpers.js';

import WebSocketController from './Controller/WebSocketController.js';
import PlaygroundController from './Controller/PlaygroundController.js';


const httpServer = createServer();
const io = new Server(httpServer, { /* options */ });


const onConnection = (socket) => {
    // TODO : Simulate/Handle unintended disconnection that does not pass thru "disconnect" event. (e.g. handle duplicate userId)
    // Possible REF: https://socket.io/get-started/private-messaging-part-2/
    Helpers.connectionList.push(
        {
            userId: socket.handshake.query.userId,
            socketId: socket.id
        }    
    )

    WebSocketController(io, socket);

    if(Helpers.lowerEnvironment.includes(process.env.ENVIRONMENT))
    {
        PlaygroundController(io, socket);
    }
}

io.on("connection", onConnection);

httpServer.listen(process.env.PORT);