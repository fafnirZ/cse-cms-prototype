const cors = require('cors')
const express = require('express');
const fs = require('fs');
const app = express();


// enable cors
app.use(cors())
const port = 8080;

// server
const http = require('http');
const server = http.createServer(app);

const io = require('socket.io')(server, {
    cors: {
        origin: ['http://localhost:3000']
    }
});


const openTemplate = () => {
    const file = fs.readFileSync('template.md', 'utf-8')
    return file
}





io.on('connection', (socket) => {
    console.log('new connection established');

    //send the template to frontend
    socket.emit('send template', openTemplate())

    socket.on('disconnect', ()=> {
        console.log('connection has been lost')
    })
});

server.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})

/*

const io = require('socket.io')(5000);

io.on('connect', (socket)=> {
    console.log('new connection')
    io.emit('a', null)
})
*/