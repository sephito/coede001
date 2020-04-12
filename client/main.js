var socket = io.connect('http:// 200.48.225.146:6677',{'forceNew':true});

socket.on('messages',function(data){
    console.log(data);
    
    render(data) ;
});

function render(data){
    var html = data.map(function(message,index){
        
        return(`
            <div class="message">
                <strong>USUARO: ${message.cip}</strong> dice:
                <strong>lat:</strong>${message.lat}- <strong>lng:</strong>${message.lng}
                </div>
        `);
    }).join(' ');

    var div_msgs=document.getElementById('messages');
    div_msgs.innerHTML = html;
    div_msgs.scrollTop =div_msgs.scroolHeight;

    document.getElementById('messages').innerHTML=html;
}