((sessionInit)=>{

	const session = require('express-session');
	const passport = require('./passport-local');
	sessionInit.init = (app)=>{
		app.use(session({
			secret: 'secret-key',
			resave: false,
			saveUninitialized: false,
			cookies:{
				maxAge: 60*60*1000
			}
		}));
		app.use(passport.initialize());
		app.use(passport.session());

	}
})(module.exports);