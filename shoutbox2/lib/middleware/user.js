var User = require('../user');

module.exports = function(req, res, next) {
	if (req.auth) {
		req.auth.name = req.auth.user
		req.auth.password = ''
		res.locals.user = req.auth;
	}

	var uid = req.session.uid;
	if (!uid) return next();

	console.log(req.session.uid)
	User.get(uid, function(err, user){
		if (err) return next(err);
		req.user = res.locals.user = user;
		next();
	});

};	