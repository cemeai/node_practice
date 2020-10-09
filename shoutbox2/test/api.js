var app = require('../app.js'),
chai = require('chai'),
request = require('supertest');

describe('GET /api/user', function() {
  it('responds with json', function(done) {
		request(app)
			.get('/api/user/3')
			.auth('cesar', 'camaleon')
			.set('Accept', 'application/json')
			// .expect('Content-Type', /json/)
			.expect(200)
			.end(function(err, res) {
				if (err) return done(err);
				done();
			});
  });
});

