const express = require('express')
const app = express();
const http = require('http');
const socketion = require('socket.io')
const server = http.createServer(app)
const path = require ('path')
const io = socketion(server);
app.set('view engine','ejs');
app.set(express.static(path.join(__dirname,"public")));
io.on("connection",function(socket){
    socket.on("send-location",function(data){
io.emit('received location',{Id :socket.Id, ...data})
    });
   socket.on("disconnect",function(){
    io.emit("user-disconnected",socket.Id);
   })

})
app.get('/',function(req,res){
    res.render('index');
})
server.listen(3000)