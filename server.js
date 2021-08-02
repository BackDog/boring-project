'use strict';

const express = require('express');
const { Server } = require('ws');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
//93hqxi65

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.options('*', cors());

var server = app.listen(PORT, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log("Example app listening at http://%s:%s", host, port);
});

const wss = new Server({ server });

wss.on('connection', function connection(ws) {
	console.log('A client connected');
	ws.send('server connected');
	ws.on('message', function (message) {
		wss.clients.forEach((client) => {
			client.send(message.toString());
		});
	});

	ws.on('close', () => function () {
		console.log('A client disconnected');
	});
});