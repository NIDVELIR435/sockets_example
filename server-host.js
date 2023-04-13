const net = require('net');
const {colors} = require("./colors");
const {customConsole} = require("./custom-console");

const server = net.createServer((socket) => {
    customConsole.blueLog(`Client connected with id: ${socket.id}`);

    socket.on('data', (data, ...rest) => {
        customConsole.blueLog(`Received data: ${colors.FgCyan}[${data}]`);

        setTimeout(()=> {
            //send message after 1 sec
            socket.write('pong');
            }, 1000)
    });

    socket.on('end', () => {
        customConsole.greenLog('Client disconnected');
    });
});

server.listen(process.env.PORT, () => {
    customConsole.greenLog('Server started');
});
