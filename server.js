'use strict';

const express = require('express');
const { Server } = require('ws');

const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';
//93hqxi65
const server = express();

server.use(express.static(__dirname));
server.use((req, res) => res.sendFile(INDEX, {root: __dirname}));
server.listen(PORT, () => console.log('SERVER RUN ON ' + PORT));
	
// server.configure(function(){
//   server.use('/media', express.static(__dirname + '/media'));
//   server.use(express.static(__dirname + '/public'));
// });

// server.listen(3000);

const websocketServer = new Server({ server });

websocketServer.on('connection', function connection(ws){
	console.log('CLIENT CONNECTED');
	
	ws.on('message', function incoming(message){
		console.log(message);
		ws.send('ECHO: ' +  message);
	});
});