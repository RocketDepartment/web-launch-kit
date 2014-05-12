var restful = require('node-restful'),
    mongoose = restful.mongoose;

mongoose.connect("mongodb://localhost/resources");

module.exports.register = function(app){
    var Resource = app.resource = restful.model('resource', mongoose.Schema({
	    title: 'string',
	    year: 'number',
	}))
	.methods(['get', 'post', 'put', 'delete']);

    Resource.register(app, '/resources');

    return Resource;	
}
