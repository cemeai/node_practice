var Entry = require('../lib/entry');

exports.addEntry = function(test) {
	var entry = new Entry ({
		"username": 'cesar',
		"title": 'test post',
		"body": 'testing'
	});
	entry.save(function(err) {
		if (err) {
			test.fail()
		}
		test.done();
	});
}

exports.count = function(test) {
	Entry.count( function(err, total) {
		if (err) {
			test.fail()
		}
		test.done();
	})
}

exports.getRange = function(test) {
	Entry.getRange(1, 5, function(err, entries) {
		if (err) {
			test.fail()
		}
		test.equal(entries.length, 5)
		test.done();
	});
}