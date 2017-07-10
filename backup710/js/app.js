var msg = "Hello World";
var dgram = require('dgram');
 
var serverSocket = dgram.createSocket('udp4');
 
serverSocket.on('message', function(msg, rinfo){
  console.log('recv %s(%d bytes) from client %s:%d', msg, msg.length, rinfo.address, rinfo.port);
 
  //echo to client
  serverSocket.send(msg, 0, msg.length, rinfo.port, rinfo.address);
});
 
//    err - Error object, https://nodejs.org/api/errors.html
serverSocket.on('error', function(err){
  console.log('error, msg - %s, stack - %s', err.message, err.stack);
});
 
serverSocket.on('listening', function(){
  console.log("7");
})
 
serverSocket.bind(7);
console.log(msg);