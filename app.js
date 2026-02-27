'use strict';
import 'dotenv/config';

import { createServer } from "http";
import { Server } from "socket.io";
import WebSocketController from './Controller/WebSocketController.js';
const httpServer = createServer();
const io = new Server(httpServer, { /* options */ });


const onConnection = (socket) => {

    WebSocketController(io, socket);
}

io.on("connection", onConnection);

httpServer.listen(process.env.PORT);