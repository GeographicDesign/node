

module.exports = function(dir, app, ctrl) {
	app.get(dir, ctrl.get.test);
};
