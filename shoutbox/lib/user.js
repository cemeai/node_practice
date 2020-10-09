var mongoose = require('mongoose')
var autoIncrement = require('mongoose-auto-increment');
var bcrypt = require('bcrypt');

mongoose.connect('mongodb://localhost:27017/shoutbox', { useNewUrlParser: true, useUnifiedTopology: true })
	.then(()=>logger.info('DB connected.')).catch(err=>logger.error(err))
autoIncrement.initialize(mongoose.connection);

var userSchema = new mongoose.Schema({
	name: String,
	password: String,
	age: Number
})
userSchema.plugin(autoIncrement.plugin, 'user');
var userModel = mongoose.model('user', userSchema)
module.exports = User;

function User(obj) {
	for (var key in obj) {
		this[key] = obj[key];
	}
}

User.prototype.save = function(fn){
	if (this.id) {
		this.update(fn);
	} else {
		var user = this;
		var new_user = new userModel({
			name: user.name,
			password: user.hashPassword(fn),
			age: user.age
		})
		new_user.save((err,data)=> {
			if (err) return fn(err);
		})
	}
};

User.prototype.update = function(fn){
	var user = this;
	var id = user.id;
	userModel.findByIdAndUpdate({id},
		{"name": user.name, 'password': user.pass, 'age': user.age}, 
		function(err, result){
		if (err) return fn(err);
	})
};

User.prototype.hashPassword = function(fn){
	var user = this;
	bcrypt.genSalt(12, function(err, salt){
		if (err) return fn(err);
		user.salt = salt;
		bcrypt.hash(user.pass, salt, function(err, hash){
			if (err) return fn(err);
			user.pass = hash;
			fn();
		});
	});
};

User.getByName = function(name, fn){
	userModel.findOne({ name: name }, function (err, user) {
		if (err) return fn(err);
		fn(null, new User(user));
	});
};

User.authenticate = function(name, pass, fn){
	User.getByName(name, function(err, user){
		if (err) return fn(err);
		if (!user.id) return fn();
		bcrypt.hash(pass, user.salt, function(err, hash){
			if (err) return fn(err);
			if (hash == user.pass) return fn(null, user);
			fn();
		});
	});
};
var tobi = new User({
	name: 'Tobi',
	pass: 'im a ferret',
	age: '2'
});
console.log(tobi)
tobi.save(function(err){
	if (err) throw err;
	console.log('user id %d', tobi.id);
});