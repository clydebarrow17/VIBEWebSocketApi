import * as PlaygroundHelpers from '../Helpers/PlaygroundHelpers.js';

export default function PlaygroundController (io, socket) {

    const allEvents = () => {
      // TODO : align onAny to websocketcontroller.js structure 

    }

    socket.onAny((eventName, ...args) => {
      // not triggered when the acknowledgement is received

      // NOTE : prints to console for every event sent from client to server

      console.log("connection id: ", socket.id);

      console.log("event name: ", eventName);
      console.log("args: ", args);
    });
}
/*

    // NOTE : Comment block... for future reference.
// Access parameters passed from the client
    const authParams = socket.handshake.auth;
    console.log('Auth parameters:', authParams); 
  
    // You can also access query parameters if used
    const queryParams = socket.handshake.query;
    console.log('Query parameters:', queryParams.param1);

    const paramsOnly = socket.handshake;
    console.log('Params parameters:', paramsOnly);
*/