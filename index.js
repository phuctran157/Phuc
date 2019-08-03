var net = require('net');
//var colors =require("colors");

var server = net.createServer();

server.on("connection", function(socket){
   var remoteAddress = socket.remoteAddress + socket.remotePort
   console.log('New client connected from', remoteAddress)

   socket.on('Data', function(d) {
       console.log("Data from", remoteAddress, d)    
       socket.write('Hello'+ d);
   });
   socket.once("close", function(){
      console.log("Connection form %s closed", remoteAddress)
   });
    socket.on('error', function(err) {
      console.log('Connection %s error : $s', remoteAddress, err.message);
   });

})

server.listen(4040, function(){
    console.log('Server started at port', server.address());
})