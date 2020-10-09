var User = require('../lib/user');

exports.getUser = function(test) {
	User.get(3, function(err, user) {
		if (user.name == null) {
			test.fail()
		}
		test.done();
	});
}

exports.addUser = function(test) {
	user = new User({
		name: 'mock_user',
		pass: 'test'
	});
	user.save(function(err){
		if (err) test.fail()
		test.done();
	});
}

exports.auth = function(test) {
	User.authenticate('cesar', 'camaeon', function(err, user) {
		if (err) {
			test.fail()
		}
		test.done();
	});
}