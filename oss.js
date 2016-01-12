/*
Open Sesame System
*/
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var fs = require('fs');
var WebSocketServer = require('websocket').server;
var piblaster = require("pi-blaster.js");


//Listening to request from the browser
//and send html file response back
app.get ('/', function(req, res){    

      fs.readFile('/home/pi/dar/front.html', 'utf8', function(err, text){
            res.send(text);
        });
});

//Listening to Port 1337 for incoming messages
server.listen(1337, function (){
    console.log((new Date()) + " Open Sesame System server is listening on port 1337... ");
});

websock = new WebSocketServer({
    httpServer: server
});

//WebSocket Server

websock.on('request', function(request) {
    
    console.log((new Date()) + ' Connection from origin ' + request.origin + '.');

    var connection = request.accept(null, request.origin);
    
    console.log((new Date()) + ' Connection accepted.');

    //Incoming Data handling
    connection.on('message', function(message) {

        console.log('Data: ' +  message.utf8Data);
   
        var data = message.utf8Data;
		
			//Write the data received to the servo
            piblaster.setPwm(17, Number(data)/100);


    });
    
    connection.on('close', function (connection){
        //close connection
        closePin();
    });

    function closePin(){
        piblaster.setPwm(17, 0);
    }

});

