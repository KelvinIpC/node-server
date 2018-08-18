((appInit)=>{

	const createError = require('http-errors');
	const path = require('path');
	const cookieParser = require('cookie-parser');
	const logger = require('morgan');


	appInit.init = (app, express)=>{
			app.set('views', path.join(__dirname, '..' ,'views'));
			app.set('view engine', 'jade');

			app.use(logger('dev'));
			app.use(express.json());
			app.use(express.urlencoded({ extended: false }));
			app.use(cookieParser());
			app.use(express.static(path.join(__dirname, '..', 'public')));

	}

})(module.exports);