var dom = require(__dirname + "/dom");

exports.get = {
	test: function(req, res, nxt) {
		dom.getHtml( (html) => {
			res.send(html);
		})

	}
}
