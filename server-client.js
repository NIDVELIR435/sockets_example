const net = require('net');
const {colors} = require("./colors");
const {customConsole} = require("./custom-console");

const socket = net.createConnection({ port: process.env.PORT }, () => {
    customConsole.blueLog('Connected to server');
});

socket.on('data', (data) => {
    customConsole.blueLog(`Received data: ${colors.FgCyan}[${data}]`);

    setTimeout(()=> {
        //send message after 1 sec
        socket.write('ping');
    }, 1000)
});

socket.write('ping');
