var xml2js = require('xml2js');

module.exports = function(req, res, next){
	var buffer = [ ];
	req.setEncoding('utf8');
	req.on('data', function(chunk){ 
		buffer.push(chunk);
	});
	req.on('end', function(){
		xml2js.parseString(buffer.join(), function(err, json){
			if(err)next(err);
				req.body = json;
				next()
			});
	});
};

