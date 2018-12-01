//Make Connection
let socket=io.connect('http://localhost:5000');

//DOM
let message=document.getElementById('message');
let handle=document.getElementById('handle');
let send=document.getElementById('send');
let output=document.getElementById('output');
let feedback=document.getElementById('feedback');

//Emit Event
send.addEventListener('click',function(){
socket.emit('chat',{
    message:message.value,
    handle:handle.value
});
})

message.addEventListener('keypress',function(){
    socket.emit('typing',handle.value);
    })

socket.on('chat',function(data){
    feedback.innerHTML='';
output.innerHTML+=`<p><b>${data.handle}:</b>${data.message}</p>`;
});

socket.on('typing',function(data){
    feedback.innerHTML=`<p><b>${data} is typing</b></p>`;
});