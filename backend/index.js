
const express = require('express')
const app = express();
const port = 8080;

// server
const http = require('http');
const server = http.createServer(app);
const socketio = require('socket.io');
const io = socketio(server);


app.get('/', (req, res)=> {
    res.send('hello world').status(200);
})

/*
class Connection {
    constructor(io, socket) {
        this.socket = socket;
        this.io = io;
        
        console.log('user has connected');
        socket.on('disconnect', ()=> this.disconect());
        socket.on('dostuff', () => this.dostuff());
    }
    connection() {
        console.log('user has connected')
    }

    disconnect() {
        console.log('user has disconnected')
    }

    dostuff() {
        console.log('hi')
    }

}
*/

io.on('connection', (socket) => {
    // new Connection(io, socket)
    console.log('user has connected')
    socket.on('disconnect', ()=> {
        console.log('user has disconnected');
    })
});



server.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})