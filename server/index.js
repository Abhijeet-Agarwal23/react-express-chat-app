const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const path = require('path');
const router = require('./router');

const app = express();

const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(express.static(DIST_DIR));
app.use('/api', router);

app.get('*', (req, res) => {
  res.sendFile(HTML_FILE);
});

const server = http.createServer(app);
const io = socketio(server);

io.on('connect', (socket) => {
  console.log('we have a new connection');

  socket.on('disconnect', () => {
    console.log('User has left');
  });
});

server.listen(port, () => {
  console.log('App listening on port: ' + port);
});
