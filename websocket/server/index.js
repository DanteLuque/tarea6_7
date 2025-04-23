import http from 'http';
import { Server } from 'socket.io';

const server = http.createServer();

const io = new Server(server, {
    cors: { origin: '*' }
});

const users = {};

io.on('connection', (socket) => {
    console.log('usuario conectado!');
    socket.on('register', (name) => {
        users[socket.id] = name;
    });

    socket.on('message', (message) => {
        const name = users[socket.id] || socket.id.slice(0, 5);
        console.log(`${name}: ${message}`);
        io.emit('message', `${name}: ${message}`);
    });

    socket.on('disconnect', () => {
        delete users[socket.id];
    });
});

server.listen(7000, () => {
    console.log('listening on http://localhost:7000');
});