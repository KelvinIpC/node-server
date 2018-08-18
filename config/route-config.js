((routeInit)=>{

	routeInit.init=(app)=>{

		const indexRouter = require('../routes/index');
		const usersRouter = require('../routes/users');

		app.use('/',indexRouter);
		app.use('/users', usersRouter);
	}
})(module.exports);