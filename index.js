let express=require('express');
let socket =require('socket.io');

let app=express();
let server=app.listen(5000,function(){
    console.log("Listening at 5000");
})

app.use(express.static('public'));


let io=socket(server);
io.on('connection',function(socket){
    // console.log('made socket connection',socket.id);

    socket.on('chat',function(data){
        io.sockets.emit('chat',data);
    })
    socket.on('typing',function(data){
        socket.broadcast.emit('typing',data);
    })

});