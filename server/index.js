var express = require ('express');
var app = express();
var server =require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static('client'));

app.get('/hola-mundo',function(req,res){
    res.status(200).send('Hola mundo desde una ruta');
})


var messages = [{
    cip:"MAESTRO",
    lat:0,
    lng:0
}];

// var ultimo = [];

io.on('connection',function(socket){
    console.log("El nodo con IP: "+socket.handshake.address+" se ha conectado..");
    socket.emit('messages',messages);
    socket.on('add-message',function(data){
        var value =messages.findIndex(x => x.cip === data.cip);
        if (value>0){
            messages[value].lat=data.lat;
            messages[value].lng=data.lng;
        }else{
          
            messages.push(data);
        }
        // messages.push(data);
        // messages(messages.find(x => x.id === data.cip)).lng=data.lng;
        // messages(messages.find(x => x.id === data.cip)).lng=data.lng;





        // ultimo=[]
        
        // ultimo.push(data);


        
        // var array = [];
        // for (var i = 0; i < messages.length; i++) {
        //     var igual=false;
        //      for (var j = 0; j < 1 & !igual; j++) {
        //          if(messages[i]['cip'] == ultimo[ultimo.length-1]['cip']) 
        //                  igual=true;
        //      }
        //     if(!igual)array.push(messages[i]);
        // }
        
        // console.log(messages);





        // var borrar;
        // for (var key in messages){
        //     borrar=key;
         
        // }

        // for (var key in messages){

        //     if(messages[key].cip==data.cip && key!=borrar){
        //         messages.splice

        //     }
        // }


        io.sockets.emit('messages',messages);
        
    });
})

server.listen(6677,function(){
    console.log('Servidor esta funcionado en http:// 200.48.225.146:6677');
});
