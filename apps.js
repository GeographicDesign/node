

var apps = [
	"template",	
];

module.exports = function(app, express) {
	for(var i = 0; i < apps.length; i++) {
		var path = "./" + apps[i];
		var dir = "/" + apps[i];
		var ctrl = require(path + "/controllers");
		var route = require(path + "/routes")(dir, app, ctrl)
	}
	
};

