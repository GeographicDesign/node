var fs = require("fs");
var d3 = require("d3");
var jsdom = require("jsdom");
var { JSDOM } = jsdom;

var template = "<!DOCTYPE HTML><html><head></head><body></body></html>";
var compiledHtml = null;
var body = null;
var head = null;

var dom = new JSDOM(template, { runScripts: "dangerously" });

var scripts = [
	"d3.v5.min.js",
	"script.js",
		
];

function loadScripts(callback) {
	var loaded = 0;
	for(var i = 0; i < scripts.length; i++) {
		fs.readFile(__dirname + "/client/js/" + scripts[i], function(err, data) {
			body.append("script")
				.html(data)
			loaded += 1;

			if( loaded == scripts.length ) {
				callback();
			}
					
		})
	}
}


function compileHtml() {
	compiledHtml = template
		.replace("<head></head>", "<head>" + head.html() + "</head>")
		.replace("<body></body>", "<body>" + body.html() + "</body>");

}



var html = d3.select(dom.window.document);

head = html.select("head");

head.append("title")
	.html("test");

body = html.select("body");

loadScripts(compileHtml)

exports.getHtml = function(callback) {
	callback(compiledHtml);
}


	






