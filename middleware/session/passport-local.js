const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const init = require('./passport');

init();

passport.use('local',  new LocalStrategy({
	usernameField: 'username',
	passwordField: 'password'
},function(username, password, done){
	console.log('new login: ',username,password);
	done(null, false, {message: 'have not implemented database'});
}));

module.exports = passport;