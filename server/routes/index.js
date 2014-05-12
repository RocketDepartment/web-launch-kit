var path = require('path');

module.exports = {
    index: function(req, res){
        res.sendfile( path.join( __dirname, '../app/index.html' ) );
    }
}