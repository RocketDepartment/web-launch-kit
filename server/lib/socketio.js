var socketio = require('socket.io');

module.exports.listen = function(app){
    return socketio.listen(app);
}