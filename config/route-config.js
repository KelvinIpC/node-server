((routeInit)=>{

	routeInit.init=(app)=>{

		const indexRouter = require('../routes/index');
		const usersRouter = require('../routes/users');
		const testRouter = require('../routes/test');


		app.use('/',indexRouter);
		app.use('/users', usersRouter);
		app.use('/', testRouter);
	}
})(module.exports);